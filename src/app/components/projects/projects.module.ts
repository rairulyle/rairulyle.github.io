import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectCardComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
