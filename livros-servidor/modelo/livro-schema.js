const mongoose = require('./conexao');

const LivroSchema = new mongoose.Schema({
    titulo: String,
    codEditora: Number,
    resumo: String,
    autores: [String],
}, { versionKey: false })

const Livro = mongoose.model('Livro', LivroSchema, 'livros');

module.exports = Livro;
