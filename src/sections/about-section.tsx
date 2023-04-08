'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import { Raleway, Lato } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: '700' });
const ralewaylite = Raleway({ subsets: ['latin'], weight: '400' });
const lato = Lato({ subsets: ['latin'], weight: '400' });

import about_config from '@/content/about-section';
import { InViewAnimateOnce } from '@/components/common/animations';
import { isTouchDevice } from '@/utils/touch-device';

const DesignElements: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <div className="absolute left-0 bottom-0 w-full h-0.5 lg:h-0.5 flex justify-center items-center z-30">
        <div className="h-full w-1/2 bg-sd-purple" />
      </div>
      <div className="absolute left-0 top-0 h-full w-1 lg:w-1 flex justify-center items-center z-30">
        <div className="w-full h-1/2 bg-sd-purple" />
      </div>
      <div className="w-full h-[150px] flex flex-col justify-end items-end">
        <div className="w-2/3 h-2/3 border-sd-purple border-l-[3px] border-t-[3px]" />
      </div>
    </React.Fragment>
  );
};

const ProfileImage: React.FC<{ image: any }> = ({ image }) => {
  return (
    <div className="relative w-11/12 sm:w-4/5 md:w-full lg:w-11/12 xl:w-4/5 right-0 aspect-square overflow-hidden rounded-md">
      <Image
        src={image}
        alt="Shreyansh Dubey, Data Analyst"
        className="object-cover"
        fill
      />
    </div>
  );
};

const AboutTitle: React.FC<{}> = () => {
  return (
    <InViewAnimateOnce
      transition={{ ease: 'easeIn', duration: 0.6 }}
      visible={{ opacity: 1, x: 0 }}
      hidden={{ opacity: 0, x: '-10%' }}
      className={`${raleway.className} z-[10] absolute top-0 text-right text-outline text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black py-2`}
    >
      About Me
    </InViewAnimateOnce>
  );
};

const AboutContent: React.FC<{ quote: string; content: string[] }> = ({
  quote,
  content
}) => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col space-y-6 lg:space-y-10 justify-center items-center bg-sd-background py-2">
      <InViewAnimateOnce
        transition={{ ease: 'easeIn', duration: 0.5, delay: 0.3 }}
        visible={{ opacity: 1, y: 0 }}
        hidden={{ opacity: 0, y: '10px' }}
        className={`${lato.className} text-sd-white text-lg lg:text-xl w-4/5 lg:w-2/3 text-center italic`}
      >
        {quote}
      </InViewAnimateOnce>
      {content.map((value, index) => {
        return (
          <InViewAnimateOnce
            key={index}
            transition={{
              ease: 'easeIn',
              duration: 0.5,
              delay: 0.3
            }}
            visible={{ opacity: 1, y: 0 }}
            hidden={{ opacity: 0, y: '10px' }}
            className={`${lato.className} text-sd-white text-lg lg:text-xl w-4/5 lg:w-2/3`}
          >
            {value}
          </InViewAnimateOnce>
        );
      })}
    </div>
  );
};

const InterestsIcon: React.FC<{ Icon: any; details?: string }> = ({
  Icon,
  details
}) => {
  const [inFocus, setInFocus] = useState(false);
  return (
    <div
      className="relative w-12 lg:w-16 aspect-square flex justify-center items-center m-2 lg:m-4 p-3 lg:p-4 border-sd-white border-[1px] rounded-full"
      onClick={() => {
        if (!isTouchDevice()) {
          return;
        }
        setInFocus(true);
        setTimeout(() => {
          setInFocus(false);
        }, 2000);
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
      <Icon className="w-full h-full fill-sd-white pointer-events-none" />
      <AnimatePresence>
        {inFocus && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className={`${ralewaylite.className} flex flex-col absolute w-[150px] bottom-[100%]`}
          >
            <div className=" w-full rounded bg-sd-white text-sd-black p-3">
              {details}
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="border-solid border-t-sd-white border-t-8 border-x-transparent border-x-8 border-b-0" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Interests: React.FC<{ interests: any[] }> = ({ interests }) => {
  return (
    <InViewAnimateOnce
      transition={{ ease: 'easeIn', duration: 0.5 }}
      visible={{ opacity: 1, y: 0 }}
      hidden={{ opacity: 0, y: '10px' }}
      className="w-full flex justify-center bg-sd-background z-20"
    >
      <div className="w-4/5 flex flex-wrap justify-center items-center py-10 bg-sd-background z-20">
        {interests.map((value, index) => {
          return (
            <InterestsIcon
              key={index}
              Icon={value.icon}
              details={value.details}
            />
          );
        })}
      </div>
    </InViewAnimateOnce>
  );
};

const AboutSection: React.FC<{}> = () => {
  return (
    <div
      id="about-section"
      className="relative w-screen overflow-hidden bg-sd-background"
    >
      <DesignElements />
      <div className="relative w-full h-full flex flex-col md:flex-row space-y-8 px-10 py-6">
        <div className="relative w-full lg:w-1/2 flex flex-col lg:flex-row justify-end items-center md:items-end">
          <AboutTitle />
          <ProfileImage image={about_config.image} />
        </div>

        <AboutContent
          quote={about_config.quote}
          content={about_config.content}
        />
      </div>
      <Interests interests={about_config.interests} />
    </div>
  );
};

export default AboutSection;
