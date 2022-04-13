import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BreakpointObserverService, ThemeSwitcherService } from '@app/services';
import { BREAKPOINTS } from '@app/services/constants';

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
