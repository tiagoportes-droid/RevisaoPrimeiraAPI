const express = require("express");
const cors = require("cors");
const conexao = require("./db.js");
// import express from express;
// import cors from cors;

const app = express();

app.use(cors());
app.use(express.json());

// {
//     "nome": "Pedro",
//     "curso": "Desenvolvimento de Sistemas"
// }

let ALUNOS = [
  { id: 1, nome: "Alice", curso: "Desenvolvimento de Sistemas" },
  { id: 2, nome: "Brenda", curso: "Rede de Computadores" },
  { id: 3, nome: "Brenno", curso: "Administração" },
  { id: 4, nome: "Carlos", curso: "Desenvolvimento de Sistemas" },
];

app.get("/", (req, res) => {
  res.json({
    mensagem: "API alunos funcionando.",
  });
});

app.get("/alunos", async (req, res) => {
  try {
    const [resultado] = await conexao.query(`
        SELECT * FROM alunos;
        `);
    res.status(200).json(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensagem: "Erro ao buscar alunos.",
    });
  }
});

app.get("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);
  const alunos = ALUNOS.find((a) => a.id === id);

  if (!alunos) {
    return res.status(404).json({
      mensagem: "Aluno não encontrado.",
    });
  }

  res.status(200).json(alunos);
});

app.post("/alunos/cadastrar", (req, res) => {
  const { nome, curso } = req.body;

  if (!nome || !curso) {
    return res.status(400).json({
      mensagem: "Nome e curso são obrigatorios.",
    });
  }

  const novoId =
    ALUNOS.length > 0 ? Math.max(...ALUNOS.map((aluno) => aluno.id)) + 1 : 1;

  const novoAluno = {
    id: novoId,
    nome: nome,
    curso: curso,
  };

  ALUNOS.push(novoAluno);

  res.status(201).json({
    mensagem: "Alunos cadastrado com sucesso.",
  });
});

app.put("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);
  const { nome, curso } = req.body;

  const indice = ALUNOS.findIndex((a) => a.id === id);

  if (indice === -1) {
    return res.status(404).json({
      mensagem: "Aluno não encontrado.",
    });
  }

  if (!nome || !curso) {
    return req(400).json({
      mensagem: "Nome e curso são obrigatorios.",
    });
  }

  ALUNOS[indice] = {
    id: id,
    nome: nome,
    curso: curso,
  };

  res.status(200).json({
    mensagem: "Alunos atualizado com sucesso",
    aluno: ALUNOS[indice],
  });
});

const PORTA = 3000;

app.listen(PORTA, () => {
  console.log("Servidor inicado com sucesso");
  console.log(`http://localhost:${PORTA}`);
});
