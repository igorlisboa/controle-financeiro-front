import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-lancar-entrada-saida',
  templateUrl: './lancar-entrada-saida.component.html',
  styleUrls: ['./lancar-entrada-saida.component.css']
})
export class LancarEntradaSaidaComponent implements OnInit {

  valor: number = 100.00;
  formaPagamento: string = 'cartao credito';
  tipo: string = 'Lanche';
  detalheMovemento: string = 'cafe';
  constructor() { }

  ngOnInit() {
  }

}
