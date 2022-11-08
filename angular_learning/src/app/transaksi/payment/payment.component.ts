import { Component, OnInit, AfterContentChecked} from '@angular/core';
import { Observable, map, pipe } from 'rxjs';
import { TransaksiService, Selecteditem } from '../transaksi.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, AfterContentChecked {

  public items : Observable<Selecteditem[]>
  public total : Observable<number>

  constructor(private transaksiService: TransaksiService) {
    this.items = this.transaksiService.selectedItems$
    this.total = this.transaksiService.selectedItems$.pipe(
      map((items) => items.reduce((total,item) => total += item.amount * item.price, 0))
    )
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.total = this.transaksiService.selectedItems$.pipe(
      map((items) => items.reduce((total,item) => total += item.amount * item.price, 0))
    )
  }

  removeitem(item: Selecteditem) {
    this.transaksiService.removeItem(item)
  }
}