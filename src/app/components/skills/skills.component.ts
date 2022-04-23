import { Component, OnInit } from '@angular/core';

import { ProfileService } from '@app/services';
import { Profile, Skills } from '@app/services/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills!: Skills;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.get().subscribe((res) => (this.skills = res.skills));
  }
}
