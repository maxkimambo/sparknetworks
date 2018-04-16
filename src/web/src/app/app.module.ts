import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent} from './components/app.header';
import { JumbotronComponent} from './components/app.jumbotron';
import { FooterComponent } from './components/app.footer';
import { CardComponent } from './components/app.card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, JumbotronComponent, FooterComponent, CardComponent]
})
export class AppModule { }
