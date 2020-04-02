import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdetailEditComponent } from './orderdetail-edit.component';

describe('OrderdetailEditComponent', () => {
  let component: OrderdetailEditComponent;
  let fixture: ComponentFixture<OrderdetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderdetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
