const express = require('express')

module.exports = function(server) {

    //Api Routes
    const router = express.Router()
    server.use('/api', router)

    const notaService = require('../api/nota/notaService')
    notaService.register(router, '/notas')

    const alunoService = require('../api/aluno/alunoService')
    alunoService.register(router, '/alunos')

}