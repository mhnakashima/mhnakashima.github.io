import { Component, OnInit } from '@angular/core';
import { faCoffee, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { GenericsService } from '../generics/generics.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about = <any>{};
  about$: Subscription;

  constructor(private genericService: GenericsService) { 
    library.add(faCoffee, faMugHot);
  }

 
 ngOnInit() {
   
    this.about$ = this.genericService.getAbout()
      .subscribe( dados => {
        this.about = dados
        console.log(this.about);
      })
  }

  ngOnDestroy(){
    this.about$.unsubscribe();
  }

}
