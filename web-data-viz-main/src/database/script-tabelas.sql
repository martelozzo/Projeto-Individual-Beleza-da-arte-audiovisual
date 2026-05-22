CREATE DATABASE arte_individual;
USE arte_individual;

CREATE TABLE usuarios (
  id         INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome       VARCHAR(100) NOT NULL,
  email      VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL
);

CREATE TABLE questoes (
  id        INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
  enunciado VARCHAR(150)         NOT NULL,
  categoria VARCHAR(100),
  ativo     BOOLEAN      NOT NULL DEFAULT TRUE
);

CREATE TABLE alternativas (
  id         INT      NOT NULL AUTO_INCREMENT PRIMARY KEY,
  questao_id INT      NOT NULL,
  texto      VARCHAR(150)     NOT NULL,
  correta    BOOLEAN  NOT NULL DEFAULT FALSE,
  ordem      SMALLINT NOT NULL DEFAULT 0,
  FOREIGN KEY (questao_id) REFERENCES questoes(id)
);

CREATE TABLE respostas (
  id             INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  usuario_id     INT NOT NULL,
  questao_id     INT NOT NULL,
  alternativa_id INT NOT NULL,
  UNIQUE KEY uq_usuario_questao (usuario_id, questao_id),
  FOREIGN KEY (usuario_id)     REFERENCES usuarios(id),
  FOREIGN KEY (questao_id)     REFERENCES questoes(id),
  FOREIGN KEY (alternativa_id) REFERENCES alternativas(id)
);


