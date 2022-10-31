import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuPromoComponent } from './menu-promo/menu-promo.component';
import { MenuCategoryComponent } from './menu-category/menu-category.component';



@NgModule({
  declarations: [
    MenuDetailComponent,
    MenuPromoComponent,
    MenuCategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }
