'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Raleway, Lato } from 'next/font/google';
import { InViewAnimateOnce } from '@/components/common/animations';
import { AnimatePresence, motion } from 'framer-motion';
import work_config from '@/content/work-section';
import { isTouchDevice } from '@/utils/touch-device';

const raleway = Raleway({ subsets: ['latin'], weight: '400' });
const lato = Lato({ subsets: ['latin'], weight: '400' });

const ExperienceRow_SM: React.FC<{ experience: any }> = ({ experience }) => {
  return (
    <div className="w-full flex sm:hidden flex-row justify-center text-sd-white">
      <div className="relative min-w-[60px] h-full py-6 ">
        <div className="absolute top-0 left-0 w-1/2 h-full border-sd-white border-r-2 " />
        <div className="absolute top-0 right-0 w-1/2 h-full border-sd-white border-l-2 " />
        <InViewAnimateOnce
          transition={{ ease: 'easeIn', duration: 0.5 }}
          visible={{ opacity: 1 }}
          hidden={{ opacity: 0 }}
          amount={0.3}
          className="relative w-full aspect-square bg-sd-white border-sd-white rounded-full border-4"
        >
          {experience.image && (
            <Image
              src={experience.image}
              alt={experience.title}
              className="object-contain p-2"
              fill
            />
          )}
        </InViewAnimateOnce>
      </div>
      <InViewAnimateOnce
        transition={{ ease: 'easeIn', duration: 0.5 }}
        visible={{ opacity: 1, x: 0 }}
        hidden={{ opacity: 0, x: '20px' }}
        amount={0.3}
        className="flex sm:hidden justify-start w-full h-full p-6"
      >
        <div className="w-full p-6 bg-sd-purple bg-opacity-10 rounded-md border-b-4 border-sd-purple">
          <div
            className={`${raleway.className} text-3xl lg:text-4xl font-black py-2`}
          >
            {experience.title}
          </div>
          <div className={`${raleway.className} text-base `}>
            {experience.company}
          </div>
          <div className={`${raleway.className} text-base `}>
            {experience.dates}
          </div>
        </div>
      </InViewAnimateOnce>
    </div>
  );
};

const ExperienceCard: React.FC<{
  leftAlign: boolean;
  initialX: string;
  experience: any;
}> = ({ leftAlign, initialX, experience }) => {
  return (
    <InViewAnimateOnce
      transition={{ ease: 'easeIn', duration: 0.5 }}
      visible={{ opacity: 1, x: 0 }}
      hidden={{ opacity: 0, x: initialX }}
      amount={0.3}
      className={`hidden sm:flex ${
        leftAlign ? 'justify-end' : 'justify-start'
      } w-full h-full p-6`}
    >
      <div className="w-full p-6 bg-sd-purple bg-opacity-10 rounded-md border-b-4 border-sd-purple">
        <div
          className={`${raleway.className} text-3xl lg:text-4xl font-black py-2`}
        >
          {experience.title}
        </div>
        <div className={`${raleway.className} text-base lg:text-lg`}>
          {experience.company}
        </div>
        <div className={`${raleway.className} text-base lg:text-lg`}>
          {experience.dates}
        </div>
        <ul className="hidden md:block py-4">
          {experience.content.map((value: any, index: number) => {
            return (
              <li key={index} className={`${lato.className} lg:text-base py-1`}>
                {value}
              </li>
            );
          })}
        </ul>
      </div>
    </InViewAnimateOnce>
  );
};

const ExperienceRow: React.FC<{
  index: number;
  experience: any;
}> = ({ index, experience }) => {
  return (
    <div className="w-full hidden sm:flex flex-row justify-center text-sd-white">
      {index % 2 == 1 && <div className="hidden sm:flex w-full h-full p-6" />}
      {index % 2 == 0 && (
        <ExperienceCard
          leftAlign={index % 2 == 0}
          initialX="-20px"
          experience={experience}
        />
      )}

      <div className="relative min-w-[60px] h-full py-6 ">
        <div className="absolute top-0 left-0 w-1/2 h-full border-sd-white border-r-2 " />
        <div className="absolute top-0 right-0 w-1/2 h-full border-sd-white border-l-2 " />
        <InViewAnimateOnce
          transition={{ ease: 'easeIn', duration: 0.5 }}
          visible={{ opacity: 1 }}
          hidden={{ opacity: 0 }}
          amount={0.3}
          className="relative w-full aspect-square bg-sd-white border-sd-white rounded-full border-4"
        >
          {experience.image && (
            <Image
              src={experience.image}
              alt={experience.title}
              className="object-contain p-2"
              fill
            />
          )}
        </InViewAnimateOnce>
      </div>

      {index % 2 == 0 && <div className="hidden sm:flex w-full h-full p-6" />}
      {index % 2 == 1 && (
        <ExperienceCard
          leftAlign={index % 2 == 1}
          initialX="20px"
          experience={experience}
        />
      )}
    </div>
  );
};

const SkillsCard: React.FC<{ title: string; Icon: any; description: any }> = ({
  title,
  Icon,
  description
}) => {
  const [inFocus, setInFocus] = useState(false);
  return (
    <div
      onClick={() => {
        if (!isTouchDevice()) {
          return;
        }
        setInFocus(!inFocus);
      }}
      onMouseOver={() => {
        if (isTouchDevice()) {
          return;
        }
        setInFocus(true);
      }}
      onMouseOut={() => {
        if (isTouchDevice()) {
          return;
        }
        setInFocus(false);
      }}
    >
      <InViewAnimateOnce
        transition={{ ease: 'easeIn', duration: 0.5 }}
        visible={{ opacity: 1, y: 0 }}
        hidden={{ opacity: 0, y: '20px' }}
        amount={0.3}
        className="relative w-[150px] aspect-square flex flex-col justify-center items-center m-8 p-8 border-sd-purple border-2 rounded-2xl"
      >
        <div className="absolute w-[70px] -top-[35px] p-2 bg-sd-background">
          <Icon className="fill-sd-white w-full" />
        </div>
        <div
          className={`${raleway.className} font-bold text-sd-white text-center`}
        >
          {title}
        </div>
        <AnimatePresence>
          {inFocus && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className={`${raleway.className} flex flex-col absolute text-base w-[200%] sm:w-[150%] md:w-[300] lg:w-[200px] bottom-2/3 z-[100]`}
            >
              <div
                className={` w-full rounded-xl bg-sd-white text-sd-black px-4 pb-4 ${
                  isTouchDevice() ? `pt-2` : `pt-4`
                } z-50`}
              >
                {isTouchDevice() && (
                  <div className="w-full flex justify-end z-50 p-1">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[24px] h-[24px] fill-sd-black"
                    >
                      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                  </div>
                )}
                {description}
              </div>
              <div className="w-full flex justify-center items-center">
                <div className="border-solid border-t-sd-white border-t-8 border-x-transparent border-x-8 border-b-0" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </InViewAnimateOnce>
    </div>
  );
};

const LibrariesCard: React.FC<{ logo: any; title: string }> = ({
  logo,
  title
}) => {
  return (
    <InViewAnimateOnce
      transition={{ ease: 'easeIn', duration: 0.5 }}
      visible={{ opacity: 1, y: 0 }}
      hidden={{ opacity: 0, y: '10px' }}
      amount={0.3}
      className="overflow-hidden relative w-[60px] aspect-square bg-sd-white rounded-full flex justify-center items-center m-4"
    >
      <Image src={logo} alt={title} className="object-contain p-1" fill />
    </InViewAnimateOnce>
  );
};

const WorkTitle: React.FC<{}> = () => {
  return (
    <InViewAnimateOnce
      transition={{ ease: 'easeIn', duration: 0.5 }}
      visible={{ opacity: 1, y: 0 }}
      hidden={{ opacity: 0, y: '20px' }}
      amount={0.5}
      className={`${raleway.className} p-12 md:p-24 w-full flex justify-center text-5xl md:text-6xl lg:text-7xl font-black text-sd-white`}
    >
      Work Experience
    </InViewAnimateOnce>
  );
};

const WorkSection: React.FC<{}> = () => {
  return (
    <div
      id="work-section"
      className="relative w-screen overflow-hidden bg-sd-background"
    >
      <WorkTitle />
      <div className="w-full flex justify-center">
        <div className="w-11/12 md:w-5/6 flex flex-col">
          {work_config.experience.map((value, index) => {
            return (
              <React.Fragment key={index}>
                <ExperienceRow index={index} experience={value} />
                <ExperienceRow_SM experience={value} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center pt-20 lg:pt-24 pb-10">
        {work_config.skills.map((value, index) => {
          return (
            <SkillsCard
              key={index}
              title={value.title}
              Icon={value.icon}
              description={value.description}
            />
          );
        })}
      </div>
      <div className="w-full flex flex-wrap justify-center mb-20 px-6 sm:px-12 md:px-20 lg:px-32">
        {work_config.libraries.map((value, index) => {
          return (
            <LibrariesCard key={index} logo={value.logo} title={value.title} />
          );
        })}
      </div>
    </div>
  );
};

export default WorkSection;
