const restful = require('node-restful')
const mongoose = restful.mongoose

const notaSchema = new mongoose.Schema({
    aluno_id: {
        type: String, 
        require: true,
    },
    nota: {
        type: Number,
        require: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = restful.model('Nota', notaSchema);
