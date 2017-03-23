module.exports = function (app) {
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const Usuario = new Schema({
        nome: {
            type: String,
            required: true
        },
        idade: {
            type: Number,
            default: 0,
            required: true
        },
        senha: {
            type: String,
            required: true
        },
        sexo: {
            type: String,
            required: true
        },
    })
    return mongoose.model('Usuarios', Usuario)
}
