export interface Profile {
  name: string;
  skills: Skills;
  experience: Experience[];
}

interface Experience {
  company: string;
  active: boolean;
  type: string;
  position: Position[];
}

interface Position {
  name: string;
  startDate: string;
  endDate?: string;
}

interface Skills {
  coding: string[];
  design: string[];
  application: string[];
  methodology: string[];
}
