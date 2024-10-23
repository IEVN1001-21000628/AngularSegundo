import { Component } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-message',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list-message.component.html',
  styles: ``
})
export class ListMessageComponent {
  constructor(public messageService: MessageserviceService){}
}
