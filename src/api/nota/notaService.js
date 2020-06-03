const Nota = require('./nota')

Nota.methods(['get', 'post', 'put', 'delete'])
Nota.updateOptions({
    new: true,
    runValidators: true,
})

module.exports = Nota