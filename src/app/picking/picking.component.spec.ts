import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickingComponent } from './picking.component';

describe('PickingComponent', () => {
  let component: PickingComponent;
  let fixture: ComponentFixture<PickingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickingComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
