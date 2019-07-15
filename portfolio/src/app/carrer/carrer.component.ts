import { Component, OnInit } from '@angular/core';
import { GenericsService } from '../generics/generics.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.scss']
})
export class CarrerComponent implements OnInit {

  constructor(private genericService: GenericsService) { }

  carrer = [];
  carrer$: Observable<any>;

  ngOnInit() {
    this.carrer$ = this.genericService.getCarrer();
  }

}
