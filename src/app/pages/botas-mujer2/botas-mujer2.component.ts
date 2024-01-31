import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-botas-mujer2',
  templateUrl: './botas-mujer2.component.html',
  styleUrls: ['./botas-mujer2.component.css']
})
export class BotasMujer2Component implements OnInit {

  public clickstoreProducto: any = {
    id: '65b9a84f3b5e60769a0b044b'
  }

  public wsnumber: string = '573223020415';

  constructor(public marketService: MarketService) { this.getProducto(); }

  ngOnInit(): void { }

  getProducto() {
    this.marketService.getProduct(this.clickstoreProducto.id)
      .subscribe({ next: (v) => { this.marketService.producto = v.producto; } })
  }

}
