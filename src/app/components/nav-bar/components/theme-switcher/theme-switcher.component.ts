import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService } from 'src/app/services/theme-switcher.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
  get islightMode(): boolean {
    return this.themeSwitcher.isLightMode;
  }

  constructor(private themeSwitcher: ThemeSwitcherService) {}

  ngOnInit(): void {}

  switchTheme(): void {
    this.themeSwitcher.switchTheme();
  }
}
