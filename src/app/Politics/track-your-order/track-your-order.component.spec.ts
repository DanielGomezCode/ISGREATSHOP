import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackYourOrderComponent } from './track-your-order.component';

describe('TrackYourOrderComponent', () => {
  let component: TrackYourOrderComponent;
  let fixture: ComponentFixture<TrackYourOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackYourOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackYourOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
