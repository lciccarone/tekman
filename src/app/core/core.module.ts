import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store';
import { HttpClientModule } from '@angular/common/http';
import { QuartersEffects } from '../store/quarters/quarters.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('appFeature', reducers),
    EffectsModule.forRoot([QuartersEffects]),
    HttpClientModule
  ]
})
export class CoreModule {
}
