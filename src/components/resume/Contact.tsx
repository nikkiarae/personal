import Section from '@/components/ui/Section';
import ResumeDownload from '@/components/ui/ResumeDownload';
import SocialLinks from '@/components/ui/SocialLinks';
import type { ResumeFile } from '@/types/types';
import ContactForm from './ContactForm';

interface ContactProps {
  resume: ResumeFile;
  alternateResume: ResumeFile;
}

const Contact = ({ resume, alternateResume }: ContactProps) => {
  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title={
        <>
          Let&apos;s build something{' '}
          <span className="text-gradient">great</span>.
        </>
      }
      description="Hiring, partnering, or just want to talk shop? Send a message and I'll get back to you."
    >
      <div className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
        <aside className="reveal card-surface flex flex-col gap-8 p-6 md:p-8">
          <div>
            <h3 className="text-lg font-semibold">Grab a copy</h3>
            <p className="mt-1 mb-5 text-sm text-muted">
              My full {resume.noun} as a PDF.
            </p>
            <ResumeDownload resume={resume} alternate={alternateResume} />
          </div>
          <div className="mt-auto">
            <h3 className="mb-4 text-lg font-semibold">Find me online</h3>
            <SocialLinks />
          </div>
        </aside>

        <div className="reveal card-surface p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
