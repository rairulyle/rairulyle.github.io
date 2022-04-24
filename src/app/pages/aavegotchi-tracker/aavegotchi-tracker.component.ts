import { Component, OnInit } from '@angular/core';

import { AavegotchiTrackerService } from '@app/services';

@Component({
  selector: 'app-aavegotchi-tracker',
  templateUrl: './aavegotchi-tracker.component.html',
  styleUrls: ['./aavegotchi-tracker.component.scss'],
})
export class AavegotchiTrackerComponent implements OnInit {
  constructor(private aavegotchiTrackerService: AavegotchiTrackerService) {}

  ngOnInit(): void {
    this.aavegotchiTrackerService.getLendings().subscribe(({ data }) => console.log(data));
    this.aavegotchiTrackerService.getEarnings().subscribe(({ data }) => console.log(data));
  }
}
