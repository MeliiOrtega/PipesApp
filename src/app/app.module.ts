import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';

//CAMBIAR IDIOMA
import localEs from '@angular/common/locales/es-EC';
import localFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    VentasModule

  ],
  providers: [
    { provide:LOCALE_ID, useValue: 'es-EC' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
