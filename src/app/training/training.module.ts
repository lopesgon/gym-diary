import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TRAINING_COMPONENTS } from './components';

import { TrainingRoutingModule } from './training-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TrainingRoutingModule
  ],
  declarations: [
    TRAINING_COMPONENTS
  ]
})
export class TrainingModule { }
