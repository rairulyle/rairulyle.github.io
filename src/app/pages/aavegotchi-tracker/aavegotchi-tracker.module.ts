import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AavegotchiTrackerService } from '@app/services/aavegotchi-tracker.service';

import { AavegotchiTrackerRoutingModule } from './aavegotchi-tracker-routing.module';
import { AavegotchiTrackerComponent } from './aavegotchi-tracker.component';

@NgModule({
  declarations: [AavegotchiTrackerComponent],
  imports: [CommonModule, AavegotchiTrackerRoutingModule],
  providers: [AavegotchiTrackerService],
})
export class AavegotchiTrackerModule {}
