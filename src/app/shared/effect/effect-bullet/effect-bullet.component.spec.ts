/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EffectBulletComponent } from './effect-bullet.component';

describe('EffectBulletComponent', () => {
  let component: EffectBulletComponent;
  let fixture: ComponentFixture<EffectBulletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectBulletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
