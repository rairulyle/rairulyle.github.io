export interface Profile {
  name: string;
  email: string;
  skills: Skills;
  experience: Experience[];
  socials: Social[];
  projects: Project[];
}

export interface Experience {
  company: string;
  active: boolean;
  type: string;
  position: Position[];
}

export interface Position {
  name: string;
  startDate: string;
  endDate?: string;
}

export interface Skills {
  coding: string[];
  design: string[];
  application: string[];
  methodology: string[];
}

export interface Social {
  name: string;
  icon: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  source?: string;
  url?: string;
}
