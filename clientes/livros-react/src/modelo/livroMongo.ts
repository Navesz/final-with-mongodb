//LivroMongo.ts

export interface LivroMongo {
  _id: string;
  titulo: string;
  codEditora: number; 
  resumo: string;
  autores: string[]; 
}
