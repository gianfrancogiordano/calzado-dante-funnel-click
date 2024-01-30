import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarketService } from '../services/market.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public idPedido: string = '';
  public pedido: any = {
    cliente: {
      nombre: '',
      direccion: '',
      telefono: ''
    },
    createdAt: '',
    estado: '',
    pago: '',
    articulos: [],
    negocio: '',
    updatedAt: '',
    descuentoTotal: 0,
    valorTotal: 0,
    activo: null,
    _id: ''
  }

  constructor(private route: ActivatedRoute,
              private marketService: MarketService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idPedido = params['id'];
      this.getPedido();
    });
  }

  getPedido() {
    this.marketService.getPedido(this.idPedido)
        .subscribe({
          next: (v) => {  this.pedido = v; },
          error: (e) => { console.log(e); }
        })
  }

}
