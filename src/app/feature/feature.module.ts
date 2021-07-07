import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule
  ],
  declarations: [
    FeatureComponent
  ]
})
export class FeatureModule { }
