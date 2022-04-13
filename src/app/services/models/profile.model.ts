export interface Profile {
  name: string;
  skills: Skills;
  experience: Experience[];
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
