import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { AavegotchiTrackerService } from '@app/services/aavegotchi-tracker.service';

import { AavegotchiTrackerRoutingModule } from './aavegotchi-tracker-routing.module';
import { AavegotchiTrackerComponent } from './aavegotchi-tracker.component';
import { AavegotchiLendingsTableModule } from './modules/aavegotchi-lendings-table/aavegotchi-lendings-table.module';

@NgModule({
  declarations: [AavegotchiTrackerComponent],
  imports: [CommonModule, AavegotchiTrackerRoutingModule, AavegotchiLendingsTableModule],
  providers: [AavegotchiTrackerService, DatePipe, CurrencyPipe],
})
export class AavegotchiTrackerModule {}
