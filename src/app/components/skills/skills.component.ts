import { Component, OnInit } from '@angular/core';

import { ProfileService } from '@app/services';
import { Profile, Skills } from '@app/services/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  private profile!: Profile;

  get skills(): Skills {
    return this.profile?.skills;
  }

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.get().subscribe((res) => (this.profile = res));
  }
}
