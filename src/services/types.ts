export interface Project {
    id: number
    title: string
    category: string
    briefDescription: string
    detailedDescription: string
    liveLink?: string
    repositoryLink?: string
    images: string[]
    applications: string[]
    technologiesUsed: string[]
    librariesAndTools: string[]
    softSkills: string[]
    learningOutcomes: string[]
}

export interface Skill {
    name: string
    icon: string 
}

export interface Job {
    company: string
    title: string
    location: string
    date: string
    responsibilities: string[]
}