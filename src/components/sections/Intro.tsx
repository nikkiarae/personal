'use client';

import Image from 'next/image';
import { PROJECTS, RESUME } from '@/lib/constants/navigation';
import { useRouter } from 'next/navigation';
import { Button } from '@heroui/react';

const Intro = () => {
  const router = useRouter();

  return (
    <section className="grid gap-10 pt-3 md:grid-cols-[1fr_370px] md:items-center md:gap-14 md:pt-8">
      <div className="text-center md:text-left">
        <p className="mb-4 text-[1.9rem] font-medium text-[#aab4cc]">
          Hey, I&apos;m Nikki 👋
        </p>

        <div className="space-y-0.5">
          <h1 className="text-[3.3rem] font-semibold leading-[0.95] tracking-[-0.02em] text-accent sm:text-[4.1rem]">
            Business-Focused
          </h1>
          <h1 className="text-[3.3rem] font-semibold leading-[0.95] tracking-[-0.02em] sm:text-[4.1rem]">
            Full Stack Engineer
          </h1>
        </div>

        <p className="mt-6 max-w-160 text-[2rem] leading-tight text-[#b8c2d8]">
          Delivering secure, scalable web platforms aligned to business goals,
          accelerating delivery, improving operational efficiency, and creating
          measurable results.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
          <Button
            onPress={() => router.push(`/${RESUME.toLowerCase()}`)}
            variant="primary"
            size="lg"
            className="bg-primary text-white hover:bg-primary/90"
          >
            View Resume
          </Button>

          <Button
            onPress={() => router.push(`/${PROJECTS.toLowerCase()}`)}
            variant="outline"
            size="lg"
          >
            Browse Projects
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-end">
        <div className="rounded-full border-4 border-accent p-4.5">
          <div className="rounded-full bg-[#4f5968] p-1">
            <Image
              src="/assets/images/profile.jpeg"
              alt="Nikki Rae"
              width={330}
              height={330}
              className="h-80.5 w-80.5 rounded-full object-cover object-top sm:h-80 sm:w-80"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
