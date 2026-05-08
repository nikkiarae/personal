import {
  Education,
  Experience,
  Introduction,
  MySkills,
  PageHeader,
  Download,
} from '@/components/sections';
import { Page } from '@/components/layout';
import { Map } from '@/components/map';
import { fetchJobs } from '@/lib/api/jobs';
import { Separator } from '@/components/third-party';
import { getVisitorRegion } from '@/hooks/useVisitorRegion';


const About = async () => {
  const jobs = await fetchJobs();
  const { isUkVisitor, coordinates } = await getVisitorRegion();

  return (
    <Page>
      <PageHeader
        heading={'About Me'}
        subHeading={
          'Passionate about designing and building seamless, efficient, and visually compelling web applications.'
        }
      />
      <div className="flex flex-col gap-6 md:gap-12">
        <Download isUkVisitor={isUkVisitor} />
        <Map
          longitude={coordinates.longitude}
          latitude={coordinates.latitude}
        />
        <Separator variant="tertiary" />
        <Introduction />
        <Separator variant="tertiary" />
        <MySkills />
        <Separator variant="tertiary" />
        <Experience jobs={jobs} />
        <Separator variant="tertiary" />
        <Education />
      </div>
    </Page>
  );
};

export default About;
