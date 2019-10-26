import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersCreationPage } from './players-creation.page';

describe('PlayersCreationPage', () => {
  let component: PlayersCreationPage;
  let fixture: ComponentFixture<PlayersCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersCreationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
