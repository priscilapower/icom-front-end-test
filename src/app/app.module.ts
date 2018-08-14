import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { HomeComponent } from './home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    FaleConoscoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [
      {
          provide: LOCALE_ID,
          useValue: 'pt-BR'
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
