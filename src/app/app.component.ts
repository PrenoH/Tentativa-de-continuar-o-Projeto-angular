import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { TarefaService } from './tarefa.service';



@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tarefas: any[] = [];
  novaTarefa: string = '';

  

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.tarefas = this.tarefaService.listarTarefas();
  }
  
  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefaService.adicionarTarefa(this.novaTarefa);
      this.novaTarefa = '';
      this.tarefas = this.tarefaService.listarTarefas();
    }
  }

  excluirTarefa(id: number) {
    this.tarefaService.excluirTarefa(id);
    this.tarefas = this.tarefaService.listarTarefas();
  }



deletarItem: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  items = [
    { produto: 'Leite', quantidade: 2, comprado: false },
    { produto: 'Cerveja', quantidade: 12, comprado: true }
  ];

  novoProduto = '';
  novaQuantidade: number | null = null;

  adicionarItem() {
    if (this.novoProduto && this.novaQuantidade) {
      this.items.push({
        produto: this.novoProduto,
        quantidade: this.novaQuantidade,
        comprado: false
      });
      this.novoProduto = '';
      this.novaQuantidade = null;
    }
  }
  



  
  atualizarStatus(id: number, included: boolean) {
    this.tarefaService.atualizarStatus(id, included);
    this.tarefas = this.tarefaService.listarTarefas();
  }
}



