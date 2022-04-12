import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointObserverService } from 'src/app/services/breakpoint-observer.service';
import { BREAKPOINTS } from 'src/app/services/constants/breakpoints.enum';
import { ThemeSwitcherService } from 'src/app/services/theme-switcher.service';

import { NavItem } from '../drawer/models/nav-item.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() items!: NavItem[];
  @Output() openDrawer = new EventEmitter<void>();

  get islightMode(): string {
    return this.themeSwitcher.islightMode ? 'dark' : 'light';
  }

  get isLarge(): boolean {
    return this.breakpointObserver.match(BREAKPOINTS.lg);
  }

  constructor(private themeSwitcher: ThemeSwitcherService, private breakpointObserver: BreakpointObserverService) {}

  ngOnInit(): void {}

  openDrawerClicked(): void {
    this.openDrawer.emit();
  }
}
