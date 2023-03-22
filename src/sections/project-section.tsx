'use client';
import React from 'react';
import Image from 'next/image';
import { Raleway, Lato } from 'next/font/google';
import { Github } from '@/components/common/socials';

const raleway = Raleway({ subsets: ['latin'], weight: '400' });
const lato = Lato({ subsets: ['latin'], weight: '400' });

import Adas from '@/assets/projects/adas.jpeg';
import AmbitionBox from '@/assets/projects/ambitionbox.jpeg';
import Covid19 from '@/assets/projects/covid19.jpg';
import HeyCoffee from '@/assets/projects/heycoffee.png';
import Message from '@/assets/projects/message.jpg';
import Ngram from '@/assets/projects/ngram.jpg';
import Whatsapp from '@/assets/projects/whatsapp.jpg';

const ProjectCard: React.FC<{
  title: string;
  image: any;
  github: string;
  description: string;
  tags?: string;
}> = ({ title, image, github, description, tags }) => {
  return (
    <div className="relative w-[320px] mx-5 my-10 p-5 flex flex-col text-sd-white bg-sd-purple bg-opacity-10 rounded-xl space-y-3 border-sd-purple border-b-4">
      <div className="relative w-full aspect-[4/3] bg-sd-white rounded-md overflow-hidden border-sd-white border-b-[1px]">
        <Image src={image} alt={title} className="object-cover" fill />
      </div>
      <div className={`${raleway.className} text-3xl font-black`}>{title}</div>
      <div>{description}</div>
      <div className="absolute w-[50px] right-2 border-sd-white border-2 top-0 aspect-square bg-sd-black rounded-full flex justify-center items-center p-2">
        <Github
          className="w-full h-full fill-sd-white"
          onClick={() => {
            window.open(github, '_blank');
          }}
        />
      </div>
    </div>
  );
};

const ProjectSection: React.FC<{}> = () => {
  return (
    <div className="relative w-screen overflow-hidden bg-sd-background">
      <div className="w-full p-12 lg:p-20">
        <div
          className={`${raleway.className} w-full flex justify-start text-xl text-sd-white`}
        >
          My Work
        </div>
        <div
          className={`${raleway.className} w-full flex justify-start text-5xl md:text-6xl lg:text-7xl font-black text-sd-white`}
        >
          Projects
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        <ProjectCard
          title="N-Gram Language Model"
          description="N-Gram Language."
          image={Ngram}
          github="https://github.com/3dot14shreyansh/N-Gram-Language-Model"
        />
        <ProjectCard
          title="Message Classifier"
          description="Implementation of message classifier which classifies messages to either spam or personal."
          image={Message}
          github="https://github.com/3dot14shreyansh/message-classifier"
        />
        <ProjectCard
          title="Ambition Box"
          description="Implementation of web scrapping using python."
          image={AmbitionBox}
          github="https://github.com/3dot14shreyansh/Web-Scraping-Ambition-box-"
        />
        <ProjectCard
          title="WhatsApp Chat Analyser"
          description="Web based app to analyse WhatsApp chat between two indivduals or a group conversation."
          image={Whatsapp}
          github="https://github.com/3dot14shreyansh/WhatsApp-chat-analyser-app"
        />
        <ProjectCard
          title="Hey Coffee"
          description="Voice Assistant App."
          image={HeyCoffee}
          github="https://github.com/3dot14shreyansh/Hey-Coffee"
        />
        <ProjectCard
          title="Covid 19 Analysis"
          description="Used Matplotlib and Seaborn library for holistic statewise analysis of Covid 19 pandemic."
          image={Covid19}
          github="https://github.com/3dot14shreyansh/COVID19-EDA"
        />
        <ProjectCard
          title="Autonomous Vehicle Program"
          description="Currently Building !!"
          image={Adas}
          github="https://github.com/3dot14shreyansh/ADAS_Autonomus_vehicle"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
