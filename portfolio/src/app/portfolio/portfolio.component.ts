import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericsService } from '../generics/generics.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio$: Observable<any>

  constructor(private genericService:GenericsService) { }

  ngOnInit() {
    this.portfolio$ = this.genericService.getPortfolio();
  }

}
