import { Profile } from '../models';

const projectImagePath = 'assets/images/projects';

export const PROFILE_DATA: Profile = {
  name: 'Lyle Vince Dela Cuesta',
  email: 'lylevincedelacuesta@gmail.com',
  skills: {
    coding: [
      'Angular',
      'TypeScript',
      'React',
      'JavaScript',
      'HTML5',
      'SCSS/CSS',
      'SQL',
      'NoSQL',
      'C#',
      'Unity',
      'GitHub Actions',
      'Docker',
      'YAML (Home Assistant)',
    ],
    design: ['Material Design (Google)', 'Bootstrap', 'Ant Design', 'Fluent Design (Microsoft)'],
    application: ['VSCode', 'Photoshop', 'Lightroom', 'Figma', 'Git Extension'],
    methodology: ['Agile (Scrum)'],
  },
  experience: [
    {
      company: 'Manulife',
      active: true,
      type: 'Full-time',
      position: [
        {
          name: 'Sr. Front-End Software Engineer (Tech Lead)',
          startDate: '03/01/2022',
        },
        {
          name: 'Front-End Software Engineer (Tech Lead)',
          startDate: '02/01/2020',
          endDate: '03/01/2022',
        },
      ],
    },
    {
      company: 'Orient Overseas Container Line (OOCL)',
      active: false,
      type: 'Full-time',
      position: [
        {
          name: 'Software Engineer',
          startDate: '08/01/2019',
          endDate: '02/01/2020',
        },
        {
          name: 'Programmer',
          startDate: '07/01/2017',
          endDate: '08/01/2019',
        },
      ],
    },
    {
      company: 'Orient Overseas Container Line',
      active: false,
      type: 'Full-time',
      position: [
        {
          name: 'Software Engineer',
          startDate: '08/01/2019',
          endDate: '02/01/2020',
        },
        {
          name: 'Programmer',
          startDate: '07/01/2017',
          endDate: '08/01/2019',
        },
      ],
    },
    {
      company: 'Malayan Colleges Laguna',
      active: false,
      type: 'Part-time',
      position: [
        {
          name: 'Information Technology Instructor',
          startDate: '07/01/2017',
          endDate: '09/01/2019',
        },
      ],
    },
    {
      company: 'Nexperia',
      active: false,
      type: 'Internship',
      position: [
        {
          name: 'Information Technology Instructor',
          startDate: '05/01/2017',
          endDate: '06/01/2016',
        },
      ],
    },
    {
      company: 'Student Assistant',
      active: false,
      type: 'Contract',
      position: [
        {
          name: 'Information Technology Instructor',
          startDate: '01/01/2017',
          endDate: '001/01/2016',
        },
      ],
    },
  ],
  socials: [
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/rairulyle/',
    },
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/rairulyle',
    },
    {
      name: 'GitLab',
      icon: 'gitlab',
      url: 'https://gitlab.com/skullpluggery',
    },
  ],
  projects: [
    {
      title: 'Manulife - CWS',
      description:
        'A multi-country customer website that allows users to easily view their Manulife policy information, check fund value, view payment information, pay online, and more!',
      backgroundColor: '#ccedde',
      image: `${projectImagePath}/Manulife.png`,
      url: 'https://online.manulife.com.ph/login',
    },
    {
      title: 'Personal Home Assistant',
      description:
        'A personal project that aims to provide home automation and a minimal design GUI. Supports Dark Mode.',
      backgroundColor: '#d4dafe',
      image: `${projectImagePath}/HomeAssistant.png`,
      url: 'https://github.com/rairulyle/HA_UI-Lovelace-Minimalist-Dashboard',
      source: 'https://github.com/rairulyle/HA_UI-Lovelace-Minimalist-Dashboard',
    },
    {
      title: 'PSVita - Persona 5 Theme',
      description: 'A personal project for PS Vita, a Persona 5-inspired theme with over 23,500+ downloads.',
      backgroundColor: '#f4b6b8',
      image: `${projectImagePath}/Persona5_PSV_Theme.png`,
      url: 'http://psv.altervista.org/theme.php?id=1521459131',
      source: 'https://github.com/rairulyle/PSV_Persona-5-Official-Theme',
    },
    {
      title: 'ReliefAgad',
      description:
        'A government project that facilitates automated cash aid distributions of the emergency subsidy program funds by DSWD.',
      backgroundColor: '#bfc3d0',
      image: `${projectImagePath}/RelieafAgad.png`,
    },
    {
      title: 'Air Quality Monitoring System (AQMS)',
      description:
        'A web application that aims to monitor the surface air quality from the different distant zones of a local municipality.',
      backgroundColor: '#b2dfdb',
      image: `${projectImagePath}/AQMS.png`,
      url: 'http://www.jocm.us/index.php?m=content&c=index&a=show&catid=221&id=1373',
      source: 'https://github.com/AQMS-Capstone/AQMS-Carmona',
    },
    {
      title: 'EZ-Search',
      description:
        'A personal company project in OOCL that allows users to easily extract AN/DO payload from all environments (PROD, PRE-PROD, and QA).',
      backgroundColor: '#b2b2b2',
      image: `${projectImagePath}/EZ-Search.png`,
    },
    {
      title: 'EZ-DBCompare',
      description:
        'A personal company project in OOCL that allows users to easily compare database tables from all environments (PROD, PRE-PROD, and QA).',
      backgroundColor: '#b8bcc3',
      image: `${projectImagePath}/EZ-DBCompare.png`,
    },
  ],
};
