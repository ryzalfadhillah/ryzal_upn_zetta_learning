import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPaymentComponent } from './total-payment.component';

describe('TotalPaymentComponent', () => {
  let component: TotalPaymentComponent;
  let fixture: ComponentFixture<TotalPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
