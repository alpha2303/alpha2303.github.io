export interface Experience {
    yearFrom: number,
    yearTo: number,
    title: string,
    company: string,
    location: string,
    desc: string,
    skills: Array<string>,
}

export interface Education {
    yearFrom: number,
    yearTo: number,
    title: string,
    institute: string,
    location: string,
    gpa: number,
    maxGpa: number,
    relevantCourses: Array<string>,
}

export interface Project {
    title: string,
    desc: string,
    skills: Array<string>
}