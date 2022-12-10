import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAgainstDeliveryComponent } from './payment-against-delivery.component';

describe('PaymentAgainstDeliveryComponent', () => {
  let component: PaymentAgainstDeliveryComponent;
  let fixture: ComponentFixture<PaymentAgainstDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAgainstDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentAgainstDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
