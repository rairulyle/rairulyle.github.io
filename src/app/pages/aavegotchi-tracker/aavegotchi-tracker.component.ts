import { Component, OnInit } from '@angular/core';

import { AavegotchiTrackerService } from '@app/services';
import { AavegotchiCoinPrice, AavegotchiLendingEarnings } from '@app/services/models';

@Component({
  selector: 'app-aavegotchi-tracker',
  templateUrl: './aavegotchi-tracker.component.html',
  styleUrls: ['./aavegotchi-tracker.component.scss'],
})
export class AavegotchiTrackerComponent implements OnInit {
  aavegotchiLendingEarnings: AavegotchiLendingEarnings[] = [];
  aavegotchiCoinPrice!: AavegotchiCoinPrice;

  constructor(private aavegotchiTrackerService: AavegotchiTrackerService) {}

  ngOnInit(): void {
    this.aavegotchiTrackerService.get().subscribe((res) => (this.aavegotchiLendingEarnings = res));
    this.aavegotchiTrackerService.getCoinPrice().subscribe((res) => (this.aavegotchiCoinPrice = res));
  }
}
