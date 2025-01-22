import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
  title: { type: String, required: true }, // Project title
  category: { type: String, required: true }, // Project category
  briefDescription: { type: String, required: true }, // Short description
  detailedDescription: { type: String, required: true }, // Detailed description
  liveLink: { type: String, required: false }, // Live website link
  repositoryLink: { type: String, required: false }, // GitHub repository link
  images: [{ type: String }], // Array of image URLs
  applications: [{ type: String }], // Array of applications used
  technologiesUsed: [{ type: String }], // Array of technologies used
  librariesAndTools: [{ type: String }], // Array of libraries and tools
  softSkills: [{ type: String }], // Array of soft skills
  learningOutcomes: [{ type: String }], // Array of learning outcomes
  createdAt: { type: Date, default: Date.now }, // Timestamp for when the project was created
});

// Prevent model overwrite if it already exists
const Project = models.Project || model('Project', ProjectSchema);

export default Project;