
export interface ProjectSection {
  title?: string;
  text?: string;
  image?: string;
  caption?: string;
  terminal?: {
    command: string;
    output: string[];
    progress?: {
      label: string;
      value: number;
      total: number;
      color: string;
    }[];
  };
}

export interface Project {
  id: string;
  year: string;
  name: string;
  type: string;
  date: string;
  readTime: string;
  sections: ProjectSection[];
  url?: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
