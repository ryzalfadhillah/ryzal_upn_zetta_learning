import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailOrderComponent } from './detail-order/detail-order.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { TotalPaymentComponent } from './total-payment/total-payment.component';



@NgModule({
  declarations: [
    DetailOrderComponent,
    PaymentMethodComponent,
    TotalPaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentModule { }
