import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipAndPayComponent } from './ship-and-pay.component';

describe('ShipAndPayComponent', () => {
  let component: ShipAndPayComponent;
  let fixture: ComponentFixture<ShipAndPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipAndPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipAndPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
