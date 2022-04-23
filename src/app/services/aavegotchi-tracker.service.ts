import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { AAVEGOTCHI_APOLLO_URI } from './constants';
import { GET_AAVEGOTCHI_LENDINGS } from './constants/aavegotchi-tracker.query';

@Injectable({
  providedIn: 'root',
})
export class AavegotchiTrackerService {
  constructor(private apollo: Apollo) {}

  // getLendings(): any {
  //   this.apollo.use(AAVEGOTCHI_APOLLO_URI.LENDING).mutate({
  //     mutation: GET_AAVEGOTCHI_LENDINGS,
  //     variables: {
  //       whitelistId: '4194',
  //       timeCreated_gte: 1650643200,
  //       timeCreated_lt: 1650729600,
  //     },
  //   });
  // }
}
