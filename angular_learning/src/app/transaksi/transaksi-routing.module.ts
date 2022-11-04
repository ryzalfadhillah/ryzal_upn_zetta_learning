import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KasirComponent } from './kasir/kasir.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaksiRoutingModule { }
