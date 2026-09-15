SHOW DATABASES; --mostra todas as databases

CREATE DATABASE turmads1b; --cria a database turmads1b

CREATE TABLE alunos ( -- cria uma tabela 
	id INT PRIMARY KEY AUTO_INCREMENT, -- cria o id com INT de PRIMARY KEY com AUTO_INCREMENT
	nome VARCHAR(150) NOT NULL, -- cria uma celula de VARCHAR com 150 de limite de caractesres 
	curso VARCHAR(150) NOT NULL -- cria uma celula de VARCHAR com 150 de limite de caractesres 
);

SHOW TABLES;

SELECT * FROM alunos;

SELECT * FROM alunos;

DELETE FROM alunos;

INSERT INTO alunos (nome, curso)
VALUES ('Brenno', 'Desenvolvimento de Sistemas'),
		('Larissa', 'Banco de Dados'),
		('Tiago', 'Segurança Cibernetica'),
		('Matheus', 'Analise de Redes');
		
SELECT * FROM alunos;
		