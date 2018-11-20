import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  WorkoutComponent
} from './components';

const routes: Routes = [
  { 
    path: 'workout', 
    children: [
      { path: '', component: WorkoutComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRoutingModule { }
