import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FooterModule } from '../footer/footer.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { DrawerComponent } from './drawer.component';

@NgModule({
  declarations: [DrawerComponent],
  imports: [CommonModule, NavBarModule, MatSidenavModule, MatListModule, FooterModule],
  exports: [DrawerComponent],
})
export class DrawerModule {}
