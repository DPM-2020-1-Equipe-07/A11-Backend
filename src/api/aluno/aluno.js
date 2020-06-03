const restful = require('node-restful')
const mongoose = restful.mongoose

const alunoSchema = new mongoose.Schema({
    nome: {
        type: String, 
        require: true,
    },
    sobrenome: {
        type: String,
        require: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = restful.model('Aluno', alunoSchema);
