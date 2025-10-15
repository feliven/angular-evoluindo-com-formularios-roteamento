import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { FormularioContato } from './paginas/formulario-contato/formulario-contato';
import { ListaContatos } from './paginas/lista-contatos/lista-contatos';

@Component({
  selector: 'app-root',
  imports: [FormularioContato, ListaContatos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
