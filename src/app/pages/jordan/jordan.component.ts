import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-jordan',
  templateUrl: './jordan.component.html',
  styleUrls: ['./jordan.component.css']
})
export class JordanComponent implements OnInit {

  public wsnumber: string = '573223020415';
  
  public clickstoreProducto: any = {
    id: '65b0b00026e80d0791f7c9f5',
    title: 'Botas RETRO 11 HOMBRE / MUJER',
    categoria: 'Botas',
    precio: 153400,
    descuento: 118000
  }

  constructor(public marketService: MarketService) { this.getProducto(); }

  ngOnInit(): void { }

  getProducto() {
    this.marketService.getProduct(this.clickstoreProducto.id)
      .subscribe({ next: (v) => { 
        this.marketService.producto = v.producto;
      } })
  }

}
