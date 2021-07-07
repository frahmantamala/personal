/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EffectSquareComponent } from './effect-square.component';

describe('EffectSquareComponent', () => {
  let component: EffectSquareComponent;
  let fixture: ComponentFixture<EffectSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
