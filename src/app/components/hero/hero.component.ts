import { Component, OnInit } from '@angular/core';
import { Container, Main } from 'tsparticles';

import { PARTICLES_OPTIONS } from './constants/particles-options';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  id = 'tsparticles';
  particlesOptions = PARTICLES_OPTIONS;

  constructor() {}

  ngOnInit(): void {}

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(main: Main): Promise<void> {
    console.log(main);
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
}
