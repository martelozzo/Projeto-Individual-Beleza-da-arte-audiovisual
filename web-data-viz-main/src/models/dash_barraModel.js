var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT
    q.id                                          AS questao_id,
    q.enunciado,
    a.id                                          AS alternativa_id,
    a.texto                                       AS alternativa_texto,
    a.correta,
    COUNT(r.id)                                   AS total_respostas,
    SUM(COUNT(r.id)) OVER (PARTITION BY q.id)     AS total_questao,
    ROUND(
        COUNT(r.id) * 100.0
        / NULLIF(SUM(COUNT(r.id)) OVER (PARTITION BY q.id), 0)
    , 1)                                          AS percentual
    FROM questoes       q
    JOIN alternativas   a  ON a.questao_id = q.id
    LEFT JOIN respostas r  ON r.alternativa_id = a.id
    WHERE q.ativo = TRUE
    GROUP BY q.id, q.enunciado, a.id, a.texto, a.correta
    ORDER BY q.id, a.ordem;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

/*
function cadastrar(nome) {
    var instrucao = `
        INSERT INTO carro (nome) VALUES ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
    */

module.exports = {
    cadastrar,
    listar
};