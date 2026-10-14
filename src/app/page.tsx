import { ViewTransition } from 'react';
import Hero from '@/components/resume/Hero';
import About from '@/components/resume/About';
import Experience from '@/components/resume/Experience';
import AiExperience from '@/components/resume/AiExperience';
import Projects from '@/components/resume/Projects';
import Skills from '@/components/resume/Skills';
import Contact from '@/components/resume/Contact';
import { fetchJobs } from '@/lib/api/jobs';
import { fetchProjects } from '@/lib/api/projects';
import { getVisitorRegion } from '@/lib/server/visitor-region';

const Home = async () => {
  const [jobs, projects, { location, resume, alternateResume }] =
    await Promise.all([fetchJobs(), fetchProjects(), getVisitorRegion()]);

  const currentJob = jobs.find((job) => job.endDate === null);

  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <div>
        <Hero
          currentJob={currentJob}
          resume={resume}
          alternateResume={alternateResume}
        />
        <About location={location} />
        <Experience jobs={jobs} />
        <AiExperience />
        <Projects projects={projects} />
        <Skills />
        <Contact resume={resume} alternateResume={alternateResume} />
      </div>
    </ViewTransition>
  );
};

export default Home;
