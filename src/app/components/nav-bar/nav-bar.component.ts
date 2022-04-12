import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService } from 'src/app/services/theme-switcher.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  get islightMode(): string {
    return this.themeSwitcher.islightMode ? 'dark' : 'light';
  }

  constructor(private themeSwitcher: ThemeSwitcherService) {}

  ngOnInit(): void {}
}
