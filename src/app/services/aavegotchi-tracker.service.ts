import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import * as ethers from 'ethers';
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
  constructor(private apollo: Apollo, private http: HttpClient, private datePipe: DatePipe) {}

  get(): Observable<AavegotchiLendingEarnings[]> {
    const lendingIds: string[] = [];
    const aavegotchiLendingEarnings: AavegotchiLendingEarnings[] = [];
    return this.getLendings().pipe(
      switchMap(({ data }) => {
        data.gotchiLendings.forEach((lending) => {
          aavegotchiLendingEarnings.push({
            ...lending,
            gotchiName: lending.gotchi.name,
            timeCreated:
              this.datePipe.transform(parseInt(lending.timeCreated, 10) * 1000, 'MM/dd/yyyy hh:mm:ss a') ?? '',
          });
          lendingIds.push(lending.id);
        });

        return this.getEarnings(lendingIds);
      }),
      map(({ data }) => {
        data.gotchiLendings.forEach((earnings) => {
          const earningsToEther: AavegotchiEarnings = {
            id: earnings.id,
            claimedALPHA: ethers.utils.formatUnits(earnings.claimedALPHA ?? '', 'ether'),
            claimedFOMO: ethers.utils.formatUnits(earnings.claimedFOMO ?? '', 'ether'),
            claimedFUD: ethers.utils.formatUnits(earnings.claimedFUD ?? '', 'ether'),
            claimedKEK: ethers.utils.formatUnits(earnings.claimedALPHA ?? '', 'ether'),
          };

          Object.assign(
            aavegotchiLendingEarnings.find((x) => x.id === earnings.id),
            {
              ...earnings,
              ...earningsToEther,
            }
          );
        });
        return aavegotchiLendingEarnings;
      })
    );
  }

  private getLendings(): Observable<ApolloQueryResult<{ gotchiLendings: AavegotchiLending[] }>> {
    return this.apollo.use(AAVEGOTCHI_APOLLO_URI.LENDING).query<{ gotchiLendings: AavegotchiLending[] }>({
      query: GET_AAVEGOTCHI_LENDINGS,
      variables: {
        whitelistId: '4194',
        timeCreated_gte: 1650211200,
        timeCreated_lt: 1651075200,
      },
    });
  }

  private getEarnings(lendingIds: string[]): Observable<ApolloQueryResult<{ gotchiLendings: AavegotchiEarnings[] }>> {
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
