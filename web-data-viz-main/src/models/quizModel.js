var database = require("../database/config")

/*function listar() {
    var instrucao = `
        SELECT * FROM carro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}*/

/*function cadastrar(usuarioId, questaoId, alternativaId) {
    var instrucao = `
        INSERT INTO respostas (usuario_id, questao_id, alternativa_id)
        VALUES ('${usuarioId}', '${questaoId}', '${alternativaId}')
        ON DUPLICATE KEY UPDATE alternativa_id = '${alternativaId}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}*/

function cadastrar(usuarioId, alt1, alt2, alt3, alt4, alt5, alt6, alt7, alt8, alt9, alt10) {
    var instrucao = `
        INSERT INTO respostas (usuario_id, questao_id, alternativa_id)
        VALUES
        ('${usuarioId}', '1',  '${alt1}'),
        ('${usuarioId}', '2',  '${alt2}'),
        ('${usuarioId}', '3',  '${alt3}'),
        ('${usuarioId}', '4',  '${alt4}'),
        ('${usuarioId}', '5',  '${alt5}'),
        ('${usuarioId}', '6',  '${alt6}'),
        ('${usuarioId}', '7',  '${alt7}'),
        ('${usuarioId}', '8',  '${alt8}'),
        ('${usuarioId}', '9',  '${alt9}'),
        ('${usuarioId}', '10', '${alt10}')
        ON DUPLICATE KEY UPDATE alternativa_id = VALUES(alternativa_id);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
    //,listar
};