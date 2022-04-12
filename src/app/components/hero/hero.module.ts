import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';

import { HeroComponent } from './hero.component';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, NgParticlesModule],
  exports: [HeroComponent],
})
export class HeroModule {}
