import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-temah',
  standalone: true,
  imports: [],
  templateUrl: './temah.component.html',
  styles: ``
})
export class TemahComponent {
  @Input() mensaje!: string;//propiedad de entrada ----- mandar parametros a otras cosas

  @Output() mensaje2 = new EventEmitter<string>();

  enviarMensaje(){
    this.mensaje2.emit('Hola desde del hijo ')
  }
}


