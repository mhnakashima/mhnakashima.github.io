import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GenericsComponent } from './generics/generics.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { CarrerComponent } from './carrer/carrer.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { GenericsService } from './generics/generics.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    GenericsComponent,
    AboutComponent,
    SkillsComponent,
    CarrerComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [GenericsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
