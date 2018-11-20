import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'workout',
    pathMatch: 'full'
  }, {
    path: '',
    loadChildren: '../workout/workout.module#WorkoutModule',
  }, {
    path: '',
    loadChildren: '../training/training.module#TrainingModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
