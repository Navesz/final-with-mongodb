const Livro = require('./livro-schema');

// Obter todos os livros
const obterLivros = async () => {
  try {
    return await Livro.find();
  } catch (error) {
    // Tratamento de erro
    console.error("Erro ao obter livros:", error);
  }
};

// Incluir um novo livro
const incluir = async (livro) => {
  try {
    return await Livro.create(livro);
  } catch (error) {
    // Tratamento de erro
    console.error("Erro ao incluir livro:", error);
  }
};

// Excluir um livro pelo seu ID
const excluir = async (codigo) => {
  try {
    return await Livro.deleteOne({ _id: codigo });
  } catch (error) {
    // Tratamento de erro
    console.error("Erro ao excluir livro:", error);
  }
};

module.exports = { obterLivros, incluir, excluir };
