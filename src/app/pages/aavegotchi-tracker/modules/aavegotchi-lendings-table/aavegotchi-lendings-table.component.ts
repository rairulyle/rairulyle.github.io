import { Component, Input, OnInit } from '@angular/core';

import { AavegotchiCoinPrice, AavegotchiLendingEarnings, AAVEGOTCHI_COIN } from '@app/services/models';

import { AAVEGOTCHI_LENDINGS_TABLES_COLUMNS, AAVEGOTCHI_COIN_MAP } from './constants';
import { AavegotchiLendingsTableColumn } from './models';

@Component({
  selector: 'app-aavegotchi-lendings-table',
  templateUrl: './aavegotchi-lendings-table.component.html',
  styleUrls: ['./aavegotchi-lendings-table.component.scss'],
})
export class AavegotchiLendingsTableComponent implements OnInit {
  readonly DEFAULT_CURRENCY = 'php';
  @Input() dataSource: AavegotchiLendingEarnings[] = [];
  @Input() coinPrice!: AavegotchiCoinPrice;

  displayedColumns: AavegotchiLendingsTableColumn[] = AAVEGOTCHI_LENDINGS_TABLES_COLUMNS;
  columnsToDisplay: string[] = this.displayedColumns.map(({ value }) => value);

  constructor() {}

  ngOnInit(): void {}

  getCoinPrice(coinName: string, coinQty: number): number {
    return parseInt((coinQty * this.coinPrice[this.getCoinMap(coinName)][this.DEFAULT_CURRENCY]).toFixed(2), 10);
  }

  getCoinMap(coinName: string): AAVEGOTCHI_COIN {
    return AAVEGOTCHI_COIN_MAP.get(coinName) ?? AAVEGOTCHI_COIN.GHST;
  }
}
