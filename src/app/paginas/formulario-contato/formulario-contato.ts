import { Component } from '@angular/core';
import { Container } from '../../componentes/container/container';
import { Separador } from '../../componentes/separador/separador';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  imports: [Container, Separador, ReactiveFormsModule],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css',
})
export class FormularioContato {
  formularioContato!: FormGroup;

  constructor() {
    this.formularioContato = new FormGroup({
      nome: new FormControl('Nombre', Validators.required),
      telefone: new FormControl('3422334', Validators.required),
      email: new FormControl('e@mail.com', [
        Validators.required,
        Validators.email,
      ]),
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
