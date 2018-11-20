import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  TrainingComponent
} from './components';

const routes: Routes = [
  { 
    path: 'training', 
    children: [
      { path: '', component: TrainingComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
