import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  novaMensagem: string = '';
  mensagens: { autor: string, texto: string }[] = [
    { autor: 'Atendente', texto: 'Olá, Como vai?' },
    { autor: 'Você', texto: 'Olá, Tudo certo!' }
  ];

  enviarMensagem() {
    if (this.novaMensagem.trim()) {
      this.mensagens.push({ autor: 'Você', texto: this.novaMensagem });
      this.novaMensagem = '';
    }
  }
}
