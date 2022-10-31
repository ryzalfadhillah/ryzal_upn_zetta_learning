import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPromoComponent } from './menu-promo.component';

describe('MenuPromoComponent', () => {
  let component: MenuPromoComponent;
  let fixture: ComponentFixture<MenuPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
