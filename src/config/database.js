const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb+srv://bruno:bruno@cluster0-cogjj.mongodb.net/a11?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});