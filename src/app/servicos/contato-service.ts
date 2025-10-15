import { Injectable } from '@angular/core';
import { Contatos } from '../paginas/lista-contatos/lista-contatos';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: Contatos[] = [
    { id: 1, nome: 'Ana', telefone: '29 278869420' },
    { id: 2, nome: 'Antônio', telefone: '38 128451235' },
    { id: 53, nome: 'Ágata', telefone: '38 128451235' },
    { id: 3, nome: 'Bruno', telefone: '95 695521583' },
    { id: 4, nome: 'Beatriz', telefone: '25 854986459' },
    { id: 5, nome: 'Carlos', telefone: '94 543197849' },
    { id: 6, nome: 'Cláudia', telefone: '31 176437098' },
  ];

  constructor() {
    // obtém contatos salvos no localStorage
    const contatosLSEmString: string | null = localStorage.getItem('contatos');
    const contatosLS: Contatos[] = contatosLSEmString
      ? JSON.parse(contatosLSEmString)
      : null;
    this.contatos = contatosLS || null;

    // salva contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos() {
    return this.contatos;
  }
}
