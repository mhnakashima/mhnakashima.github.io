import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenericsService implements OnInit{

  public data = {};
  
  constructor(private http: HttpClient) { }

  ngOnInit(){
    /*this.getData().subscribe(
      (data: any) => this.data = data
      //error => this.error = error
    );*/
  }

  getInfoData(): any{
    return this.data;
  }

  getCarrer(){
    return this.http.get('./assets/data/portfolio.json')
      .pipe(
        tap(
          console.log
        ),
        map(data => data.carrer)
      );
  }

  getSkills(){
    return this.http.get('./assets/data/portfolio.json')
      .pipe(
        tap(
          console.log
        ),
        map(data => data.skills)
      );
  }

  getPortfolio(){
    return this.http.get('./assets/data/portfolio.json')
      .pipe(
        tap(
          console.log
        ),
        map(data => data.portfolio)
      );
  }

  getAbout(){
    return this.http.get('./assets/data/portfolio.json')
      .pipe(
        tap(
          console.log
        ),
        map(data => data.about)
      );
  }

  getTitle(){
    return this.http.get('./assets/data/portfolio.json')
      .pipe(
        tap(
          console.log
        ),
        map(data => data.title)
      );
  }
}
