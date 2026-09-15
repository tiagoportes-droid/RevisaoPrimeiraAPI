SHOW DATABASES; --mostra todas as databases

CREATE DATABASE turmads1b; --cria a database turmads1b

CREATE TABLE alunos ( -- cria uma tabela 
	id INT PRIMARY KEY AUTO_INCREMENT, -- cria o id com INT de PRIMARY KEY com AUTO_INCREMENT
	nome VARCHAR(150) NOT NULL, -- cria uma celula de VARCHAR com 150 de limite de caractesres 
	curso VARCHAR(150) NOT NULL -- cria uma celula de VARCHAR com 150 de limite de caractesres 
);

SHOW TABLES; -- mostra as tabelas


SELECT * FROM alunos; -- mostra os valores dentro das tabelas

DELETE FROM alunos; -- deleta os valores da tabela selecionada, TODOS ELES

INSERT INTO alunos (nome, curso) -- adiciona valores as celuas escolhidas e pode acumular em ter que repetir os values
VALUES ('Brenno', 'Desenvolvimento de Sistemas'),
		('Larissa', 'Banco de Dados'),
		('Tiago', 'Segurança Cibernetica'),
		('Matheus', 'Analise de Redes');
		
SELECT * FROM alunos; -- mostra os valores de alunos
		
SELECT * FROM alunos WHERE id = 3; -- seleciona o valor com id igual a 3