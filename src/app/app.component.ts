import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';//
/* import Ejemplo1Component, {} from "./formulario/ejemplo1/ejemplo1.component";//
import ResistenciaComponent, {} from "./formulario/resistencia/resistencia.component";//
import SignInComponent from "./auth/features/sign-in/sign-in.component";//
import EmpleadosComponent, {} from "./formulario/empleados/empleados.component";//
import { TemapComponent } from "./tem/temap/temap.component";//
import { AddMessageComponent } from "./tem/add-message/add-message.component";//
import { ListMessageComponent } from "./tem/list-message/list-message.component";// */
import  AgregarComponent, {}  from './utl/agregar/agregar.component';
import  AlumnosComponent, {}  from './utl/alumnos/alumnos.component';
import  EditarComponent, {}  from './utl/editar/editar.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, NavbarComponent, AlumnosComponent, EditarComponent
  ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularSegundo';
}