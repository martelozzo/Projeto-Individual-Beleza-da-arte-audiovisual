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
        ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function validar (usuarioId) {
    var instrucao = `
        SELECT * FROM respostas WHERE usuario_id = ${usuarioId}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar(usuarioId, alt1, alt2, alt3, alt4, alt5, alt6, alt7, alt8, alt9, alt10) {
    var instrucao = `
        
        UPDATE respostas 
        SET alternativa_id = CASE questao_id
            WHEN 1 THEN ${alt1}
            WHEN 2 THEN ${alt2}
            WHEN 3 THEN ${alt3}
            WHEN 4 THEN ${alt4}
            WHEN 5 THEN ${alt5}
            WHEN 6 THEN ${alt6}
            WHEN 7 THEN ${alt7}
            WHEN 8 THEN ${alt8}
            WHEN 9 THEN ${alt9}
            WHEN 10 THEN ${alt10}
        END
        WHERE usuario_id = ${usuarioId};
        
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    validar,
    atualizar
    //,listar
};

// ON DUPLICATE KEY UPDATE alternativa_id = VALUES(alternativa_id)

// UPDATE respostas SET alternativa_id = ${alt1} WHERE usuario_id = ${usuarioId} AND questao_id = 1;
//         UPDATE respostas SET alternativa_id = ${alt2} WHERE usuario_id = ${usuarioId} AND questao_id = 2;
//         UPDATE respostas SET alternativa_id = ${alt3} WHERE usuario_id = ${usuarioId} AND questao_id = 3;
//         UPDATE respostas SET alternativa_id = ${alt4} WHERE usuario_id = ${usuarioId} AND questao_id = 4;
//         UPDATE respostas SET alternativa_id = ${alt5} WHERE usuario_id = ${usuarioId} AND questao_id = 5;
//         UPDATE respostas SET alternativa_id = ${alt6} WHERE usuario_id = ${usuarioId} AND questao_id = 6;
//         UPDATE respostas SET alternativa_id = ${alt7} WHERE usuario_id = ${usuarioId} AND questao_id = 7;
//         UPDATE respostas SET alternativa_id = ${alt8} WHERE usuario_id = ${usuarioId} AND questao_id = 8;
//         UPDATE respostas SET alternativa_id = ${alt9} WHERE usuario_id = ${usuarioId} AND questao_id = 9;
//         UPDATE respostas SET alternativa_id = ${alt10} WHERE usuario_id = ${usuarioId} AND questao_id = 10;