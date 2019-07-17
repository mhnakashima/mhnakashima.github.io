import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericsService } from '../generics/generics.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills$: Observable<any>;

  constructor(private genericService: GenericsService) { }

  ngOnInit() {
    this.skills$ = this.genericService.getSkills();

    console.log(this.skills$);
  }

}
