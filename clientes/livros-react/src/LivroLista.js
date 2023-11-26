import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';
import { Livro } from './modelo/Livro';

const LinhaLivro = ({ livro, excluir, nomeEditora }) => {
  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul className="list-unstyled">
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => excluir(livro._id)}
        >
          Excluir
        </button>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLivros = async () => {
      const livrosObtidos = await controleLivro.obterLivros();
      setLivros(livrosObtidos);
    };

    fetchLivros();
  }, []);

  const excluir = async (codigo) => {
    console.log(codigo)
    const sucesso = await controleLivro.excluir(codigo);
    if (sucesso) {
      const livrosAtualizados = await controleLivro.obterLivros();
      setLivros(livrosAtualizados);
    }
  };

  const getNomeEditora = (codEditora) => {
    const editora = controleEditora.getEditoras().find(e => e.codEditora === codEditora);
    return editora ? editora.nome : 'Desconhecida';
  };

  return (
    <main className="container">
      <h1 className="my-4 text-center">Catálogo de Livros</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Título</th>
            <th>Editora</th>
            <th>Resumo</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro
              key={livro._id}
              livro={livro}
              excluir={excluir}
              nomeEditora={getNomeEditora(livro.codEditora)}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
