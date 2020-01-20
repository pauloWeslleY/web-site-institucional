import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { NossaVisaoComponent } from './nossa-visao/nossa-visao.component';

@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
    ContatosComponent,
    NossaVisaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
