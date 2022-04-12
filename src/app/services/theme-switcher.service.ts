import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  private favicon: HTMLLinkElement = document.querySelector('#favicon') as HTMLLinkElement;
  private bodyElement = document.body;

  get islightMode(): boolean {
    return !this.bodyElement.classList.contains('theme-alternate');
  }

  get currentTheme(): string {
    return this.islightMode ? 'light' : 'dark';
  }

  constructor() {}

  switchTheme(): void {
    this.islightMode ? this.darkMode() : this.lightMode();
    this.favicon.href = `assets/svg/rairulyle-logo-${this.currentTheme}.svg`;
  }

  private lightMode(): void {
    this.bodyElement.classList.remove('theme-alternate');
  }

  private darkMode(): void {
    this.bodyElement.classList.add('theme-alternate');
  }
}
