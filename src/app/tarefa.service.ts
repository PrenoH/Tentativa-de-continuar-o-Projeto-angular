
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  tarefas = [
    { id: 1, descricao: 'Tarefa 1', included: false },
    { id: 2, descricao: 'Tarefa 2', included: true }
  ];

  listarTarefas() {
    return this.tarefas;
  }

  adicionarTarefa(descricao: string) {
    const novaTarefa = { id: this.tarefas.length + 1, descricao, included: false };
    this.tarefas.push(novaTarefa);
  }

  excluirTarefa(id: number) {
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
  }

  atualizarStatus(id: number, included: boolean) {
    const tarefa = this.tarefas.find(tarefa => tarefa.id === id);
    if (tarefa) {
      tarefa.included = included;
    }
  }
}
