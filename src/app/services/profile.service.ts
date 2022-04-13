import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Profile } from '@services/models';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  get(): Observable<Profile> {
    return this.http.get<Profile>('assets/data/profile.json');
  }
}
