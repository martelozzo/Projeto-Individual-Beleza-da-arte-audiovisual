var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT count(id) / 10 AS usuarios FROM respostas;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function media() {
    var instrucao = `
        SELECT ROUND(AVG(acertos), 1) AS media_geral
    FROM (
    SELECT r.usuario_id, COUNT(r.id) AS acertos
    FROM respostas r
    JOIN alternativas a ON a.id = r.alternativa_id
    WHERE a.correta = TRUE
    GROUP BY r.usuario_id
    ) AS notas;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function acertos(usuarioId) {
    var instrucao = `
       SELECT COUNT(r.id) AS acertos
        FROM respostas r
        JOIN alternativas a ON a.id = r.alternativa_id
        WHERE a.correta = TRUE
        AND r.usuario_id = '${usuarioId}';
       
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mais_erradas() {
    var instrucao = `
        SELECT q.id AS questao_id, COUNT(r.id) AS total_erros
        FROM respostas r
        JOIN alternativas a ON a.id = r.alternativa_id
        JOIN questoes q ON q.id = r.questao_id
        WHERE a.correta = FALSE
        GROUP BY q.id
        ORDER BY total_erros DESC
        LIMIT 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mais_erradas_porcentagem() {
    var instrucao = `
        SELECT q.id AS questao_id,
        COUNT(CASE WHEN a.correta = FALSE THEN 1 END) AS total_erros,
        COUNT(r.id)                                   AS total_respostas
        FROM respostas r
        JOIN alternativas a ON a.id = r.alternativa_id
        JOIN questoes q    ON q.id  = r.questao_id
        GROUP BY q.id
        ORDER BY total_erros DESC
        LIMIT 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function categorias_geral() {
    var instrucao = `
        SELECT
    SUM(CASE WHEN acertos BETWEEN 0 AND 4 THEN 1 ELSE 0 END) AS iniciante,
    SUM(CASE WHEN acertos BETWEEN 5 AND 7 THEN 1 ELSE 0 END) AS intermediario,
    SUM(CASE WHEN acertos BETWEEN 8 AND 9 THEN 1 ELSE 0 END) AS avancado,
    SUM(CASE WHEN acertos = 10             THEN 1 ELSE 0 END) AS expert
        FROM (
    SELECT r.usuario_id, COUNT(r.id) AS acertos
    FROM respostas r
    JOIN alternativas a ON a.id = r.alternativa_id
    WHERE a.correta = TRUE
    GROUP BY r.usuario_id
        ) AS notas;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



// function cadastrar(nome) {
//     var instrucao = `
//         INSERT INTO carro (nome) VALUES ('${nome}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

module.exports = {
    //cadastrar,
    listar,
    media,
    acertos,
    mais_erradas,
    mais_erradas_porcentagem,
    categorias_geral
};