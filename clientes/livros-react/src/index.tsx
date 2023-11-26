import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ControleLivro } from './controle/ControleLivros';
import { Livro } from './modelo/Livro';

const controleLivro = new ControleLivro();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
