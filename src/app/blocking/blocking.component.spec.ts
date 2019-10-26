import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockingComponent } from './blocking.component';

describe('BlockingComponent', () => {
  let component: BlockingComponent;
  let fixture: ComponentFixture<BlockingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockingComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
