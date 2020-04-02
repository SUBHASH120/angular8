import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperAddComponent } from './shipper-add.component';

describe('CustomerAddComponent', () => {
  let component: ShipperAddComponent;
  let fixture: ComponentFixture<ShipperAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipperAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipperAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
