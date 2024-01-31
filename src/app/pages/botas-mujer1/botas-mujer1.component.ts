import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-botas-mujer1',
  templateUrl: './botas-mujer1.component.html',
  styleUrls: ['./botas-mujer1.component.css']
})
export class BotasMujer1Component implements OnInit {

  public clickstoreProducto: any = {
    id: '65b9a7903b5e60769a0b03e3'
  }

  public wsnumber: string = '573223020415';

  constructor(public marketService: MarketService) { this.getProducto(); }

  ngOnInit(): void { }

  getProducto() {
    this.marketService.getProduct(this.clickstoreProducto.id)
      .subscribe({ next: (v) => { this.marketService.producto = v.producto; } })
  }

}
