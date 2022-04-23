import { Component, OnInit } from '@angular/core';

import { ThemeSwitcherService } from '@app/services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  get isLightMode(): boolean {
    return this.themeSwitcher.isLightMode;
  }

  get yearNow(): string {
    return new Date().getFullYear().toString();
  }

  constructor(private themeSwitcher: ThemeSwitcherService) {}

  ngOnInit(): void {}
}
