export interface Params {
    params: Promise<{ 
      id: string
    }>
  }

export interface Project {
    _id: string
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
    _id: string
    company: string
    title: string
    location: string
    startDate: Date
    endDate: Date
    responsibilities: string[]
}