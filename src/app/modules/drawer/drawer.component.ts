import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PAGE_NAV } from './constants/nav-items';
import { NavItem } from './models/nav-item.model';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  get navItems(): NavItem[] {
    return this.isHomeRoute ? PAGE_NAV.HOME : [];
  }

  get isHomeRoute(): boolean {
    return this.router.url === '/';
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
