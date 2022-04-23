import {
  CollisionMode,
  DestroyMode,
  InteractivityDetect,
  IOptions,
  MoveDirection,
  OutMode,
  RecursivePartial,
} from 'tsparticles';

export const PARTICLES_OPTIONS: RecursivePartial<IOptions> = {
  fpsLimit: 60,
  fullScreen: false,
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ['#5865f2', '#cdd1fb', '#3d49ec'],
    },
    destroy: {
      mode: DestroyMode.none,
      split: {
        count: 1,
        factor: {
          value: 9,
          random: {
            enable: true,
            minimumValue: 4,
          },
        },
        rate: {
          value: 10,
          random: {
            enable: true,
            minimumValue: 5,
          },
        },
        particles: {
          collisions: {
            enable: false,
          },
          destroy: {
            mode: DestroyMode.none,
          },
          life: {
            count: 1,
            duration: {
              value: 1,
            },
          },
        },
      },
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        sides: 5,
      },
      image: {
        src: 'https://cdn.matteobruni.it/images/particles/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: false,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: {
        enable: true,
        minimumValue: 1,
      },
      animation: {
        enable: false,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    lineLinked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    collisions: {
      enable: false,
      mode: CollisionMode.destroy,
    },
    move: {
      enable: true,
      speed: 1,
      direction: MoveDirection.none,
      random: false,
      straight: false,
      out_mode: OutMode.out,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectsOn: InteractivityDetect.window,
    events: {
      onHover: {
        enable: false,
        mode: 'repulse',
        parallax: {
          enable: false,
          force: 60,
          smooth: 10,
        },
      },
      onClick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 1,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  detectRetina: true,
};
