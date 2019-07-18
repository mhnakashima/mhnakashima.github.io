import { Component, OnInit, OnDestroy } from '@angular/core';
import { GenericsService } from '../generics/generics.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  info = <any>{};
  info$: Subscription;

  constructor(private genericService: GenericsService) { }

  ngOnInit() {
   
    this.info$ = this.genericService.getTitle()
      .subscribe( dados => {
        this.info = dados
        console.log(this.info);
      })
  }

  ngOnDestroy(){
    this.info$.unsubscribe();
  }

}
