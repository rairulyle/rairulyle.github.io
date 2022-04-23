import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AavegotchiTrackerRoutingModule } from './aavegotchi-tracker-routing.module';
import { AavegotchiTrackerComponent } from './aavegotchi-tracker.component';

@NgModule({
  declarations: [AavegotchiTrackerComponent],
  imports: [CommonModule, AavegotchiTrackerRoutingModule],
})
export class AavegotchiTrackerModule {}
