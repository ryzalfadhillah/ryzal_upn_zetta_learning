import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KasirComponent } from './transaksi/kasir/kasir.component';
import { MenuComponent } from './transaksi/menu/menu.component';
import { PaymentComponent } from './transaksi/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/kasir'
  },
  {
    path: 'kasir',
    component: KasirComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
