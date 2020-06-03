const port = 3003;

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./cors')

const Notas = require('../api/nota/nota')

//Midweres
server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.use(cors)

server.listen(port, function() {
    console.log('Backend executando na porta ' + port)
})

server.get("/notas/aluno/:id", async (request, response) => {
    try {
        var result = await Notas.find({ aluno_id: request.params.id}).exec()
        response.send(result);
    } catch(error) {
        response.status(500).send(error);
    }
});

module.exports = server