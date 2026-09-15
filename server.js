const express = require("express");
const cors = require("cors");
// import express from express;
// import cors from cors;

const app = express();

app.use(cors());
app.use(express.json())

// {
//     "nome": "Pedro",
//     "curso": "Desenvolvimento de Sistemas"
// }


let alunos = [
    {id: 2, nome: "Alice", curso: "Desenvolvimento de Sistemas" },
    {id: 3, nome: "Brenda", curso: "Rede de Computadores"},
    {id: 1, nome: "Brenno", curso: "Administração" },
    {id: 4, nome: "Carlos", curso: "Desenvolvimento de Sistemas" },
]