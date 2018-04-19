import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { FilterComponent } from './components/app.filter';
import { HeaderComponent} from './components/app.header';
import { JumbotronComponent} from './components/app.jumbotron';
import { FooterComponent } from './components/app.footer';
import { CardComponent } from './components/app.card';
import {AppComponent} from './app.component'; 
import { MatchesService } from './services/MatchesService';
import { CardListComponent } from './components/app.card.list';
@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    HeaderComponent,
    JumbotronComponent,
    FooterComponent,
    CardComponent, 
    CardListComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
