import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { item } from '../kasir/kasir.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  styles: [
    '[bgprimer]{background-color: #06283D};',
    '[bgsecondary]{background-color: #256D85;}',
    '[bgthird]{background-color: #DFF6FF};',
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('items') items: item[]=[]
  @Output ('itemAdded') onAddItem : EventEmitter<item> = new EventEmitter<item>()
  @ViewChild('bgprimer') bgprimer?:ElementRef;
  @ViewChild('bgsecondary') bgsecondary?:ElementRef;
  @ViewChild('bgthird') bgthird?:ElementRef;

  addItem(item :item) : void{
    this.onAddItem.emit(item)
  }

  ngAfterViewInit(){
    this.bgprimer?.nativeElement.setAttribute('bgprimer', '');
    this.bgsecondary?.nativeElement.setAttribute('bgsecondary', '');
    this.bgthird?.nativeElement.setAttribute('bgthird', '');
  }

}
