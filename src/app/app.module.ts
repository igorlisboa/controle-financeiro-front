import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design/material-design.module';
import { LancarEntradaSaidaComponent } from './funcionalidades/movimento/lancar-entrada-saida/lancar-entrada-saida.component';
import { TransferenciaComponent } from './funcionalidades/movimento/transferencia/transferencia.component';
import { HomeComponent } from './telas/home/home.component';
import { LancamentosComponent } from './telas/lancamentos/lancamentos.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LancarEntradaSaidaComponent,
    TransferenciaComponent,
    HomeComponent,
    LancamentosComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialDesignModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
