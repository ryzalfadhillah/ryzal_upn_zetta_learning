import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './transaksi/menu/menu.component';
import { PaymentComponent } from './transaksi/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./transaksi/transaksi.module').then(module => module.TransaksiModule)
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
