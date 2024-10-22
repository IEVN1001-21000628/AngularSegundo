import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Ejemplo1Component, {} from "./formulario/ejemplo1/ejemplo1.component";
import { ResistenciaComponent } from "./formulario/resistencia/resistencia.component";
import SignInComponent from "./auth/features/sign-in/sign-in.component";
import { EmpleadosComponent } from "./formulario/empleados/empleados.component";
import { TemapComponent } from "./tem/temap/temap.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResistenciaComponent, Ejemplo1Component, SignInComponent, EmpleadosComponent, TemapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularSegundo';
}
