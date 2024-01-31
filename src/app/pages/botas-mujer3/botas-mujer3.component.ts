import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-botas-mujer3',
  templateUrl: './botas-mujer3.component.html',
  styleUrls: ['./botas-mujer3.component.css']
})
export class BotasMujer3Component implements OnInit {

  public clickstoreProducto: any = {
    id: '65b9a8ef3b5e60769a0b04b0'
  }

  public wsnumber: string = '573223020415';

  constructor(public marketService: MarketService) { this.getProducto(); }

  ngOnInit(): void { }

  getProducto() {
    this.marketService.getProduct(this.clickstoreProducto.id)
      .subscribe({ next: (v) => { this.marketService.producto = v.producto; } })
  }

}
