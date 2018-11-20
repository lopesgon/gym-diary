import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WORKOUT_COMPONENTS } from './components';

import { WorkoutRoutingModule } from './workout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WorkoutRoutingModule
  ],
  declarations: [
    WORKOUT_COMPONENTS
  ]
})
export class WorkoutModule { }
