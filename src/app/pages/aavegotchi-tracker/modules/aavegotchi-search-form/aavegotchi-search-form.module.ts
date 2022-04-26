import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AavegotchiSearchFormComponent } from './aavegotchi-search-form.component';

@NgModule({
  declarations: [AavegotchiSearchFormComponent],
  imports: [CommonModule],
  exports: [AavegotchiSearchFormComponent],
})
export class AavegotchiSearchFormModule {}
