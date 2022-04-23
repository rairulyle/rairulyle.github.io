import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Profile } from '@services/models';

import { PROFILE_DATA } from './constants';

@Injectable()
export class ProfileService {
  private profile: Profile = PROFILE_DATA;

  constructor() {}

  get(): Observable<Profile> {
    return of(this.profile);
  }
}
