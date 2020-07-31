import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
    dataPagamento: '30/07/2017', valor: 10.00, pessoa: 'Padaria do José' },
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
    dataPagamento: '30/07/2017', valor: 15.00, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de farinha', dataVencimento: '30/06/2017',
    dataPagamento: '30/07/2017', valor: 15.00, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de milho', dataVencimento: '30/06/2017',
    dataPagamento: '30/07/2017', valor: 15.00, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de milho', dataVencimento: '30/06/2017',
    dataPagamento: '30/07/2017', valor: 55.00, pessoa: 'Padaria do José' },
    { tipo: 'DESPESA', descricao: 'Churrasco', dataVencimento: '30/06/2017',
    dataPagamento: '30/07/2017', valor: 500.00, pessoa: 'Boteco do Mané' },
    { tipo: 'DESPESA', descricao: 'Compra de pinga', dataVencimento: '30/06/2017',
    dataPagamento: '30/07/2017', valor: 55.00, pessoa: 'Boteco do Mané' },
    { tipo: 'RECEITA', descricao: 'Venda de milho', dataVencimento: '30/06/2017',
    dataPagamento: '30/07/2017', valor: 55.00, pessoa: 'Boteco do Mané' }
  ];

}
