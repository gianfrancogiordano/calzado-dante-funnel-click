import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public marketPlace: MarketService) { }

  ngOnInit(): void { }

}
