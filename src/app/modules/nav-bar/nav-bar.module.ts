import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  declarations: [NavBarComponent, ThemeSwitcherComponent],
  imports: [
    CommonModule, //
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [NavBarComponent],
})
export class NavBarModule {}
