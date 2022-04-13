import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, MatCardModule, MatChipsModule],
  exports: [SkillsComponent],
})
export class SkillsModule {}
