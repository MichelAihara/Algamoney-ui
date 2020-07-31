import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  {

  pessoas = [
    { nome: 'Michel', cidade: 'Santo André', estado: 'SP', ativo: true },
    { nome: 'Giselle', cidade: 'Santo André', estado: 'BA', ativo: true },
    { nome: 'Vanessa', cidade: 'Santo André', estado: 'SP', ativo: false },
    { nome: 'Heitor', cidade: 'Santo André', estado: 'BA', ativo: true },
    { nome: 'Yuri', cidade: 'Santo André', estado: 'BA', ativo: true },
    { nome: 'Roseana', cidade: 'Santo André', estado: 'SP', ativo: false },
    { nome: 'Dario', cidade: 'Santo André', estado: 'SP', ativo: true },
    { nome: 'Oly', cidade: 'Santo André', estado: 'SP', ativo: false }
  ];

}
