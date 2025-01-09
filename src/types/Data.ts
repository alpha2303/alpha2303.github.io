export interface Experience {
  dateFrom: string;
  dateTo: string;
  title: string;
  company: string;
  location: string;
  desc: string;
  skills: Array<string>;
  url: string;
}

export interface Education {
  dateFrom: string;
  dateTo: string;
  title: string;
  institute: string;
  location: string;
  gpa: number;
  maxGpa: number;
  relevantCourses: Array<string>;
  url: string;
}

export interface Project {
  title: string;
  subtitle: string;
  desc: string;
  skills: Array<string>;
  url: string;
}
