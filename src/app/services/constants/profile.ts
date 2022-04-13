import { Profile } from '../models';

export const PROFILE_DATA: Profile = {
  name: 'Lyle Vince Dela Cuesta',
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
};