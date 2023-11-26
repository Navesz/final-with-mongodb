import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';
import { Livro } from './modelo/Livro';

const LivroDados = () => {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();
  const opcoes = controleEditora.getEditoras().map(editora => ({ value: editora.codEditora, text: editora.nome }));
  
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0]?.value || 0);
  
  const navigate = useNavigate();

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = async (event) => {
    event.preventDefault();
    // Criar um objeto com os dados do formulário
    const livroData = {
      titulo: titulo,
      codEditora: codEditora,
      resumo: resumo,
      autores: autores.split('\n') // Considerando que autores são inseridos separados por linha
    };
    // Criar um novo livro usando o objeto criado
    const novoLivro = new Livro(livroData);
    const sucesso = await controleLivro.incluir(novoLivro);
    if (sucesso) {
      window.dispatchEvent(new Event('livroAdicionado'));
      console.log(novoLivro);
      console.log(sucesso);
      navigate('/');
    } else {
      console.error('Erro ao incluir livro');
    }
  };
  
  
  return (
    <main className="container mt-3">
      <h1 className="mb-4">Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input type="text" id="titulo" className="form-control" value={titulo} onChange={e => setTitulo(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">Resumo</label>
          <textarea id="resumo" className="form-control" value={resumo} onChange={e => setResumo(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="editora" className="form-label">Editora</label>
          <select id="editora" className="form-select" value={codEditora} onChange={tratarCombo}>
            {opcoes.map(opcao => (
              <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="autores" className="form-label">Autores (1 por linha)</label>
          <textarea id="autores" className="form-control" value={autores} onChange={e => setAutores(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Salvar Dados</button>
      </form>
    </main>
  );
};


export default LivroDados;
