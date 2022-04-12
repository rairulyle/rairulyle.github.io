import { Component, OnInit } from '@angular/core';

import { NAV_ITEMS } from './constants/nav-items';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  navItems = NAV_ITEMS;
  constructor() {}

  ngOnInit(): void {}
}
