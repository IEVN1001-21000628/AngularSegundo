import { Component, OnInit } from '@angular/core';
import { ProyectoapiService } from '../proyectoapi.service';
import { Alumnosutl } from '../interfaces/alumnosutl';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  templateUrl: './agregar.component.html',
  imports: [/* FormsModule, ReactiveFormsModule, CommonModule */],
  styles: ``
})
export default class AgregarComponent /* implements OnInit  */{
  alumno: Alumnosutl = {
    matricula:0,
    nombre:'',
    apaterno:'',
    amaterno:'',
    correo:'string'
  };

  constructor(private proyectoapiService: ProyectoapiService) { }

}


/* @Component({
  selector: 'app-agregar',
  standalone: true,
  templateUrl: './agregar.component.html',
  imports: [FormsModule, ReactiveFormsModule],
  styles: ``
}) */
