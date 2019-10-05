/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SerivceCallsComponent } from './serivce-calls.component';

describe('SerivceCallsComponent', () => {
  let component: SerivceCallsComponent;
  let fixture: ComponentFixture<SerivceCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerivceCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerivceCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
