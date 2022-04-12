import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

import { BREAKPOINTS } from './constants/breakpoints.enum';

@Injectable({
  providedIn: 'root',
})
export class BreakpointObserverService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  match(breakpoint: BREAKPOINTS): boolean {
    return this.breakpointObserver.isMatched(`(min-width: ${breakpoint})`);
  }
}
