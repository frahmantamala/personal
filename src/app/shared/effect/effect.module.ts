import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectBulletComponent } from './effect-bullet/effect-bullet.component';
import { EffectLineComponent } from './effect-line/effect-line.component';
import { EffectRoundComponent } from './effect-round/effect-round.component';
import { EffectSquareComponent } from './effect-square/effect-square.component';
import { EffectTriangleComponent } from './effect-triangle/effect-triangle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EffectBulletComponent,
    EffectLineComponent,
    EffectRoundComponent,
    EffectSquareComponent,
    EffectTriangleComponent
  ],
  exports: [
    EffectBulletComponent,
    EffectLineComponent,
    EffectRoundComponent,
    EffectSquareComponent,
    EffectTriangleComponent
  ]
})
export class EffectModule { }
