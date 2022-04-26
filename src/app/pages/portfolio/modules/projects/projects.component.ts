import { Component, OnInit } from '@angular/core';

import { ProfileService } from '@app/services';
import { Project } from '@app/services/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects!: Project[];
  gitHubLink!: string;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.get().subscribe((res) => {
      this.projects = res.projects;
      this.gitHubLink = res.socials.find((social) => social.name === 'GitHub')?.url ?? '';
    });
  }
}
