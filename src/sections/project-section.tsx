'use client';
import React from 'react';
import Image from 'next/image';
import { Raleway, Lato } from 'next/font/google';
import { Github } from '@/components/common/socials';

import { InViewAnimateOnce } from '@/components/common/animations';

const raleway = Raleway({ subsets: ['latin'], weight: '400' });
const lato = Lato({ subsets: ['latin'], weight: '400' });

import project_config from '@/content/project-section';

const ProjectCard: React.FC<{
  project: any;
}> = ({ project }) => {
  return (
    <InViewAnimateOnce
      transition={{ ease: 'easeIn', duration: 0.5 }}
      visible={{ opacity: 1, y: 0 }}
      hidden={{ opacity: 0, y: '20px' }}
      amount={0.5}
      className="relative w-[320px] mx-5 my-10 p-5 flex flex-col text-sd-white bg-sd-purple bg-opacity-10 rounded-xl space-y-3 border-sd-purple border-b-4 "
    >
      <div className="relative w-full aspect-[4/3] bg-sd-white rounded-md overflow-hidden border-sd-white border-b-[1px]">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover"
          fill
        />
      </div>
      <div className={`${raleway.className} text-3xl font-black`}>
        {project.title}
      </div>
      <div className={`${lato.className}`}>{project.description}</div>
      <div
        className="absolute w-[50px] right-2 border-sd-white border-2 top-0 aspect-square bg-sd-black rounded-full flex justify-center items-center p-2 hover:scale-110 cursor-pointer"
        onClick={() => {
          if (project.github == null || project.github == '') {
            alert('This is a demo project - no link embedded');
            return;
          }
          window.open(project.github, '_blank');
        }}
      >
        <Github className="w-full h-full fill-sd-white" />
      </div>
    </InViewAnimateOnce>
  );
};

const ProjectTitle: React.FC<{}> = () => {
  return (
    <InViewAnimateOnce
      transition={{ ease: 'easeIn', duration: 0.5 }}
      visible={{ opacity: 1, y: 0 }}
      hidden={{ opacity: 0, y: '20px' }}
      amount={0.5}
      className="w-full p-12 lg:p-20"
    >
      <div
        className={`${raleway.className} w-full flex justify-start text-xl text-sd-white`}
      >
        My Work
      </div>
      <div
        className={`${raleway.className} w-full flex justify-start text-6xl md:text-6xl lg:text-7xl font-black text-sd-white`}
      >
        Projects
      </div>
    </InViewAnimateOnce>
  );
};

const ProjectSection: React.FC<{}> = () => {
  return (
    <div
      id="project-section"
      className="relative w-screen overflow-hidden bg-sd-background"
    >
      <ProjectTitle />
      <div className="w-full flex flex-wrap justify-center">
        {project_config.projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
