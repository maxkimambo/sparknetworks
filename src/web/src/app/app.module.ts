import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FilterComponent } from './components/app.filter';
import { HeaderComponent} from './components/app.header';
import { JumbotronComponent} from './components/app.jumbotron';
import { FooterComponent } from './components/app.footer';
import { CardComponent } from './components/app.card';

@NgModule({
  declarations: [
    FilterComponent,
    HeaderComponent,
    JumbotronComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ HeaderComponent, JumbotronComponent, FooterComponent, CardComponent, FilterComponent]
})
export class AppModule { }
