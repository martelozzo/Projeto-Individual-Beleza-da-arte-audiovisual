var database = require("../database/config")

/*function listar() {
    var instrucao = `
        SELECT * FROM carro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}*/

function cadastrar(usuarioId, questaoId, alternativaId) {
    var instrucao = `
        INSERT INTO respostas (usuario_id, questao_id, alternativa_id)
        VALUES ('${usuarioId}', '${questaoId}', '${alternativaId}')
        ON DUPLICATE KEY UPDATE alternativa_id = '${alternativaId}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
    //,listar
};