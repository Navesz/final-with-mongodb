//Livro.ts

import { LivroMongo } from './livroMongo';

export class Livro {
  _id: string;
  titulo: string;
  codEditora: number;
  resumo: string;
  autores: string[];

  constructor(livroMongo: LivroMongo) {
    this._id = livroMongo._id || '';
    this.titulo = livroMongo.titulo;
    this.codEditora = livroMongo.codEditora;
    this.resumo = livroMongo.resumo;
    this.autores = livroMongo.autores;
  }
}

