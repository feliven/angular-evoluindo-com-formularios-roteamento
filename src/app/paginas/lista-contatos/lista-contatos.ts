import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { Container } from '../../componentes/container/container';
import { Cabecalho } from '../../componentes/cabecalho/cabecalho';
import { Separador } from '../../componentes/separador/separador';
import { Contato } from '../../componentes/contato/contato';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Contatos {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from '../../agenda.json';

@Component({
  selector: 'app-lista-contatos',
  imports: [
    Container,
    Cabecalho,
    Separador,
    Contato,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './lista-contatos.html',
  styleUrl: './lista-contatos.css',
})
export class ListaContatos {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contatos[] = agenda;

  filtroPorTexto: string = '';

  // Remove os acentos de uma string
  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto(): Contatos[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter((contato) => {
      // Compara os nomes sem acentuações
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
    });
  }

  filtrarContatosPorLetraInicial(letra: string): Contatos[] {
    return this.filtrarContatosPorTexto().filter((contato) => {
      // Compara a letra inicial sem considerar acentuações
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .startsWith(this.removerAcentos(letra).toLowerCase());
    });
  }
}
