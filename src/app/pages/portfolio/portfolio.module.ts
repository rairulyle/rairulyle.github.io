import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutModule, DrawerModule, HeroModule, ProjectsModule, SkillsModule } from '@app/modules';
import { ProfileService } from '@app/services';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule, //
    PortfolioRoutingModule,
    HeroModule,
    DrawerModule,
    AboutModule,
    SkillsModule,
    ProjectsModule,
  ],
  providers: [ProfileService],
})
export class PortfolioModule {}
