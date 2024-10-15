import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { } from "./formulario/ejemplo1/ejemplo1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularSegundo';
}
