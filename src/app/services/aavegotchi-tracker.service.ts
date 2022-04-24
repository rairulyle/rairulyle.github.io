import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Observable, switchMap } from 'rxjs';

import { AAVEGOTCHI_APOLLO_URI, GET_AAVEGOTCHI_EARNINGS, GET_AAVEGOTCHI_LENDINGS } from './constants';
import { AavegotchiEarnings, AavegotchiLending } from './models';

@Injectable({
  providedIn: 'root',
})
export class AavegotchiTrackerService {
  constructor(private apollo: Apollo) {}

  // tslint:disable-next-line:typedef
  get() {
    this.getLendings().pipe(switchMap(({ data }) => data));
  }

  getLendings(): Observable<ApolloQueryResult<AavegotchiLending[]>> {
    return this.apollo.use(AAVEGOTCHI_APOLLO_URI.LENDING).query<AavegotchiLending[]>({
      query: GET_AAVEGOTCHI_LENDINGS,
      variables: {
        whitelistId: '4194',
        timeCreated_gte: 1650643200,
        timeCreated_lt: 1650729600,
      },
    });
  }
  getEarnings(): Observable<ApolloQueryResult<AavegotchiEarnings[]>> {
    //lendingIds: string[]
    return this.apollo.use(AAVEGOTCHI_APOLLO_URI.EARNINGS).query<AavegotchiEarnings[]>({
      query: GET_AAVEGOTCHI_EARNINGS,
      variables: {
        lendingIds: [
          '343636',
          '345238',
          '345388',
          '345618',
          '345624',
          '346869',
          '346999',
          '350026',
          '350287',
          '350440',
          '352136',
          '355075',
        ],
      },
    });
  }
}
