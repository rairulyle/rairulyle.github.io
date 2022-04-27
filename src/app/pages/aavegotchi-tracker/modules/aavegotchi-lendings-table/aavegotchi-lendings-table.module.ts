import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { AavegotchiLendingsTableComponent } from './aavegotchi-lendings-table.component';

@NgModule({
  declarations: [AavegotchiLendingsTableComponent],
  imports: [MatTableModule, CommonModule],
  exports: [AavegotchiLendingsTableComponent],
})
export class AavegotchiLendingsTableModule {}
