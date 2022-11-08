import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { item, TransaksiService } from '../transaksi.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public items : Observable<item[]>

  constructor(private transaksiService: TransaksiService) {
    this.items = this.transaksiService.items$
  }

  ngOnInit(): void {
  }

  addItem(item: item): void {
    this.transaksiService.addItem(item)
  }

}
