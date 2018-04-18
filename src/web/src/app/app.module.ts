import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { FilterComponent } from './components/app.filter';
import { HeaderComponent} from './components/app.header';
import { JumbotronComponent} from './components/app.jumbotron';
import { FooterComponent } from './components/app.footer';
import { CardComponent } from './components/app.card';
import {AppComponent} from './app.component'; 
@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    HeaderComponent,
    JumbotronComponent,
    FooterComponent,
    CardComponent, 
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
