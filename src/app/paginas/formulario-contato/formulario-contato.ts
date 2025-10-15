import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Container } from '../../componentes/container/container';
import { Separador } from '../../componentes/separador/separador';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-contato',
  imports: [
    CommonModule,
    Container,
    Separador,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css',
})
export class FormularioContato {
  formularioContato!: FormGroup;

  constructor() {
    this.formularioContato = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl('02/02/2020'),
      redes: new FormControl('twiter'),
      observacoes: new FormControl('hello world'),
    });
  }

  salvarContato() {
    if (this.formularioContato.valid) {
      console.log(this.formularioContato.value);
    } else {
      console.log('FORMULÁRIO INVÀLIDO!!!');
    }
  }

  cancelar() {
    console.log('CANCELLED!');
  }
}
