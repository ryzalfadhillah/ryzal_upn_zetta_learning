import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KasirComponent } from './transaksi/kasir/kasir.component';
import { MenuComponent } from './transaksi/menu/menu.component';
import { PaymentComponent } from './transaksi/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    KasirComponent,
    MenuComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
