import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { NewsComponent } from './news/news.component';
import { ServiceCardsComponent } from './service-cards/service-cards.component';
import { ProjectCardsComponent } from './project-cards/project-cards.component';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    NewsComponent,
    ServiceCardsComponent,
    ProjectCardsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
