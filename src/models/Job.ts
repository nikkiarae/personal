import { Job as JobType } from '@/types/types';
import { Schema, model, models } from 'mongoose';

const JobSchema = new Schema<JobType>({
  company: { type: String, required: true }, // Name of the company
  title: { type: String, required: true }, // Job title
  location: { type: String, required: true }, // Job location
  startDate: { type: Date, required: true }, // Date Start (e.g., "Oct 2023 - Current")
  endDate: { type: Date, required: false }, // Date End (e.g., "Oct 2023 - Current")
  responsibilities: [{ type: String, required: true }], // Array of responsibilities
},
{
    timestamps: true
});

// Prevent model overwrite if it already exists
const Job = models.Job || model('Job', JobSchema);

export default Job;