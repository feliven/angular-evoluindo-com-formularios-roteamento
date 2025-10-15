import { Component } from '@angular/core';
import { Container } from '../../componentes/container/container';
import { Separador } from '../../componentes/separador/separador';

@Component({
  selector: 'app-formulario-contato',
  imports: [Container, Separador],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css',
})
export class FormularioContato {}
