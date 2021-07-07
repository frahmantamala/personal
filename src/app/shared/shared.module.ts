import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EffectModule } from './effect/effect.module';
import { SpinnerPreloaderComponent } from './spinner-preloader/spinner-preloader.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    EffectModule,
    SpinnerPreloaderComponent
  ],
  declarations: [
    HeaderComponent,
    NavigationComponent,
    SpinnerPreloaderComponent
  ]
})
export class SharedModule { }
