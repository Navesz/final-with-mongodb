//ControleLivros.ts

import { Livro } from '../modelo/Livro';
import { LivroMongo } from '../modelo/livroMongo'; 
const baseURL = "http://localhost:3030/livros";

export class ControleLivro {

  async obterLivros(): Promise<Livro[]> {
    try {
      const response = await fetch(baseURL);
      const livrosData: LivroMongo[] = await response.json();
      return livrosData.map(livroMongo => new Livro(livroMongo));
    } catch (error) {
      console.error('Falha ao obter livros:', error);
      return [];
    }
  }
  

  async incluir(livro: Livro): Promise<boolean> {
    try {
      const livroMongo: Omit<LivroMongo, '_id'> = {
        titulo: livro.titulo,
        codEditora: livro.codEditora,
        resumo: livro.resumo,
        autores: livro.autores
      };
  
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(livroMongo)
      });
      return response.ok;
    } catch (error) {
      console.error('Falha ao incluir livro:', error);
      return false;
    }
  }
  

  // Método para excluir um livro no servidor
  async excluir(_id: string): Promise<boolean> {
    try {
      const response = await fetch(`${baseURL}/${_id}`, { method: 'DELETE' });
      return response.ok;
    } catch (error) {
      console.error('Falha ao excluir livro:', error);
      return false;
    }
  }
}
