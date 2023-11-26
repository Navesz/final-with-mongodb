const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// Rota GET para obter todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar livros: " + error.message });
  }
});

// Rota POST para incluir um novo livro
router.post('/', async (req, res) => {
  try {
    const livro = req.body;
    const novoLivro = await incluir(livro);
    res.status(201).json(novoLivro);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao incluir livro: " + error.message });
  }
});

// Rota DELETE para excluir um livro
router.delete('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    await excluir(_id);
    res.status(200).json({ mensagem: "Livro excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao excluir livro: " + error.message });
  }
});

module.exports = router;
