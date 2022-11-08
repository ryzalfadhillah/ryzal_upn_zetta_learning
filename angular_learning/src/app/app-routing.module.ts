import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './transaksi/menu/menu.component';
import { PaymentComponent } from './transaksi/payment/payment.component';

const routes: Routes = [
  {
    path: 'kasir',
    loadChildren: () => import('./transaksi/transaksi.module').then(module => module.TransaksiModule)
  },

  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(module => module.EmployeeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
