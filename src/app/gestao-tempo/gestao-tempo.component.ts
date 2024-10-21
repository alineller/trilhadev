import { Component } from '@angular/core';

@Component({
  selector: 'app-gestao-tempo',
  templateUrl: './gestao-tempo.component.html',
  styleUrls: ['./gestao-tempo.component.scss']
})
export class GestaoTempoComponent {
  perguntas = [
    {
      pergunta: 'Qual das opções abaixo melhor descreve as atividades Importantes na Tríade do Tempo?',
      respostas: [
        { resposta: 'a) São atividades que aparecem de última hora e precisam ser resolvidas rapidamente.', correta: false },
        { resposta: 'b) São atividades que geram resultados a longo prazo e estão alinhadas com seus objetivos e metas pessoais.', correta: true },
        { resposta: 'c) São atividades que não trazem grande valor, mas que surgem por circunstâncias externas.', correta: false }
      ]
    },
    // Aqui vamos adicionar mais perguntas
  ];

  respostaSelecionada = null;
  constructorO() { }

  selecionarResposta(resposta: any) {
    this.respostaSelecionada = resposta;
  }

  realizarTeste() {
    // Aqui vamos adicionar a lógica para realizar o teste
  }
}