import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-botas-mujer',
  templateUrl: './botas-mujer.component.html',
  styleUrls: ['./botas-mujer.component.css']
})
export class BotasMujerComponent implements OnInit {

  public clickstoreProducto: any = {
    id: '65b0752826e80d0791f762ca',
    title: 'BOTAS MUJER',
    categoria: 'Botas',
    precio: 153400,
    descuento: 120000
  }

  public wsnumber: string = '573223020415';

  constructor(public marketService: MarketService) { this.getProducto(); }

  ngOnInit(): void { }

  getProducto() {
    this.marketService.getProduct(this.clickstoreProducto.id)
      .subscribe({ next: (v) => { this.marketService.producto = v.producto; } })
  }

}
