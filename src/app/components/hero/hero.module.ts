import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgParticlesModule } from 'ng-particles';

import { HeroComponent } from './hero.component';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, NgParticlesModule, MatIconModule, MatButtonModule],
  exports: [HeroComponent],
})
export class HeroModule {}
