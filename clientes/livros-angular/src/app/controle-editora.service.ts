import { Injectable } from '@angular/core';
import { Editora } from './editora'; // Ajuste o caminho do import conforme necessário

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Editora[] = [
    new Editora(1, 'Editora A'),
    new Editora(2, 'Editora B'),
    new Editora(3, 'Editora C')
    // Adicione mais editoras conforme necessário
  ];

  constructor() { }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }
}
