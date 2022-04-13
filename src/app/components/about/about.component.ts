import { Component, OnInit } from '@angular/core';

import { ProfileService } from '@app/services';
import { Profile } from '@app/services/models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  private profile!: Profile;

  get company(): string {
    return this.profile?.experience.find((exp) => exp.active)?.company ?? '';
  }

  get job(): string {
    return this.profile?.experience.find((exp) => exp.active)?.position[0].name ?? '';
  }

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.get().subscribe((res) => (this.profile = res));
  }
}
