import { Component, OnInit } from '@angular/core';

import { ProfileService } from '@app/services';
import { Profile, Socials } from '@app/services/models';

import { PARTICLES_OPTIONS } from './constants/particles-options';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  particlesOptions = PARTICLES_OPTIONS;
  profile!: Profile;

  get socials(): Socials[] {
    return this.profile?.socials;
  }

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.get().subscribe((res) => (this.profile = res));
  }

  // particlesLoaded(container: Container): void {
  //   console.log(container);
  // }

  // async particlesInit(main: Main): Promise<void> {
  //   console.log(main);
  //   // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  // }
}
