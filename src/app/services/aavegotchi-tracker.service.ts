import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, switchMap } from 'rxjs';

import {
  AAVEGOTCHI_APOLLO_URI,
  GET_AAVEGOTCHI_COIN_PRICE,
  GET_AAVEGOTCHI_EARNINGS,
  GET_AAVEGOTCHI_LENDINGS,
} from './constants';
import { AavegotchiCoinPrice, AavegotchiEarnings, AavegotchiLending, AavegotchiLendingEarnings } from './models';

@Injectable({
  providedIn: 'root',
})
export class AavegotchiTrackerService {
  constructor(private apollo: Apollo, private http: HttpClient) {}

  get(): Observable<AavegotchiLendingEarnings[]> {
    const lendingIds: string[] = [];
    const aavegotchiLendingEarnings: AavegotchiLendingEarnings[] = [];

    return this.getLendings().pipe(
      switchMap(({ data }) => {
        data.gotchiLendings.forEach((lending) => {
          aavegotchiLendingEarnings.push({ ...lending });
          lendingIds.push(lending.id);
        });

        return this.getEarnings(lendingIds);
      }),
      map(({ data }) => {
        data.gotchiLendings.forEach((earnings) => {
          Object.assign(
            aavegotchiLendingEarnings.find((x) => (x.id = earnings.id)),
            { earnings }
          );
        });
        return aavegotchiLendingEarnings;
      })
    );
  }

  getLendings(): Observable<ApolloQueryResult<{ gotchiLendings: AavegotchiLending[] }>> {
    return this.apollo.use(AAVEGOTCHI_APOLLO_URI.LENDING).query<{ gotchiLendings: AavegotchiLending[] }>({
      query: GET_AAVEGOTCHI_LENDINGS,
      variables: {
        whitelistId: '4194',
        timeCreated_gte: 1650643200,
        timeCreated_lt: 1650729600,
      },
    });
  }
  getEarnings(lendingIds: string[]): Observable<ApolloQueryResult<{ gotchiLendings: AavegotchiEarnings[] }>> {
    return this.apollo.use(AAVEGOTCHI_APOLLO_URI.EARNINGS).query<{ gotchiLendings: AavegotchiEarnings[] }>({
      query: GET_AAVEGOTCHI_EARNINGS,
      variables: {
        lendingIds,
      },
    });
  }

  getCoinPrice(): Observable<AavegotchiCoinPrice> {
    return this.http.get<AavegotchiCoinPrice>(GET_AAVEGOTCHI_COIN_PRICE);
  }
}
