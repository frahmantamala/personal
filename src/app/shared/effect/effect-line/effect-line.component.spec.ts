/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EffectLineComponent } from './effect-line.component';

describe('EffectLineComponent', () => {
  let component: EffectLineComponent;
  let fixture: ComponentFixture<EffectLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
