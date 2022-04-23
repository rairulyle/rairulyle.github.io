import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AavegotchiTrackerComponent } from './aavegotchi-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: AavegotchiTrackerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AavegotchiTrackerRoutingModule {}
