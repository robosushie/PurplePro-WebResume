'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import { Lato, Raleway } from 'next/font/google';
import {
  Github,
  Instagram,
  Linkedin,
  Twitter
} from '@/components/common/socials';
import { Email } from '@/components/common/icons';

const raleway = Raleway({ subsets: ['latin'], weight: '400' });
const lato = Lato({ subsets: ['latin'], weight: '400' });

const ProfileImage: React.FC<{ profile: any }> = ({ profile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="relative h-2/3 aspect-square bg-sd-black rounded-full border-sd-purple border-[1px] overflow-hidden z-20"
    >
      <Image
        src={profile.image}
        alt={profile.description}
        className="object-cover"
        fill
        placeholder="blur"
      />
    </motion.div>
  );
};

const SocialIcon: React.FC<{
  social: any;
  containerClassName: string;
  childClassName: string;
  index: number;
}> = ({ social, containerClassName, childClassName, index }) => {
  const Icon = social.icon;
  return (
    <div className={containerClassName}>
      <motion.div
        initial={{ opacity: 0, y: '-50%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.6 + 0.3 * index,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Icon
          className={childClassName}
          onClick={() => {
            window.open(social.url, '_blank');
          }}
        />
      </motion.div>
    </div>
  );
};

const HeroContent: React.FC<{ content: any }> = ({ content }) => {
  const [githubHover, setGithubHover] = useState(false);
  const ProfileIcon = content.profile.icon;
  return (
    <div className="w-full lg:w-4/5 h-full flex flex-col justify-center items-start px-8 xl:px-20">
      <motion.div
        initial={{ opacity: 0, y: '10px' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
          ease: 'easeIn'
        }}
        className={`${raleway.className} text-5xl lg:text-6xl xl:text-7xl font-extrabold text-sd-white py-2`}
      >
        {content.intro[0]}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: '10px' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.3,
          ease: 'easeIn'
        }}
        className={`${raleway.className} text-5xl lg:text-6xl xl:text-7xl font-extrabold text-sd-purple py-2`}
      >
        {content.intro[1]}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: '10px' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.6,
          ease: 'easeIn'
        }}
        className={`${raleway.className} text-base lg:text-md xl:text-lg text-sd-white`}
      >
        {content.role}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: '10px' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.9,
          ease: 'easeIn'
        }}
        className={`${lato.className} text-lg xl:text-xl text-sd-white py-6 md:py-8`}
      >
        {content.content}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: '10px' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 2.2,
          ease: 'easeIn'
        }}
        className="flex space-x-4 md:space-x-8"
      >
        <button
          className={`${raleway.className} box-border border-sd-white hover:border-sd-purple hover:text-sd-purple hover:bg-transparent font-bold border-[1px] text-sd-black px-6 py-2 flex justify-center items-center rounded-full bg-sd-white`}
          onClick={() => {
            window.open(content.resume.url, '_blank');
          }}
        >
          Resume
        </button>
        <div
          className={`${raleway.className} relative box-border hover:border-sd-purple hover:text-sd-purple border-sd-white border-[1px] text-sd-white pl-10 pr-14 py-2 flex justify-center items-center rounded-full hover:cursor-pointer`}
          onMouseOver={() => {
            setGithubHover(true);
          }}
          onMouseOut={() => {
            setGithubHover(false);
          }}
          onClick={() => {
            window.open('https://github.com/3dot14shreyansh', '_blank');
          }}
        >
          {content.profile.title}
          <div className="absolute h-full top-0 right-0">
            <ProfileIcon
              className={
                githubHover
                  ? 'h-[40px] aspect-square fill-sd-purple'
                  : 'h-[40px] aspect-square fill-sd-white'
              }
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const HeroMain: React.FC<{ config: any }> = ({ config }) => {
  return (
    <div className="absolute w-full h-full flex flex-col md:flex-row">
      <div className="w-full grow md:w-1/2 md:h-full flex justify-center items-center">
        <div className="relative h-4/5 md:h-1/2 lg:h-2/3 aspect-square rounded-full flex justify-center items-center">
          <ProfileImage profile={config.profile} />
          <SocialIcon
            index={0}
            social={config.socials[0]}
            containerClassName="absolute lg:py-2 h-full flex justify-center items-end transform rotate-[330deg] z-20"
            childClassName="w-[25px] md:w-[30px] lg:w-[65px] lg:py-4 aspect-square fill-sd-white transform -rotate-[330deg] rounded-full border-transparent hover:lg:border-sd-white border-[1px] hover:scale-110"
          />
          <SocialIcon
            index={1}
            social={config.socials[1]}
            containerClassName="absolute lg:py-2 h-full flex justify-center items-end transform rotate-[10deg] z-20"
            childClassName="w-[25px] md:w-[30px] lg:w-[65px] lg:py-4 aspect-square fill-sd-white transform -rotate-[10deg] rounded-full border-transparent hover:lg:border-sd-white border-[1px] hover:scale-110"
          />
          <SocialIcon
            index={2}
            social={config.socials[2]}
            containerClassName="absolute lg:py-2 h-full flex justify-center items-end transform rotate-[50deg] z-20"
            childClassName="w-[25px] md:w-[30px] lg:w-[65px] lg:py-4 aspect-square fill-sd-white transform -rotate-[50deg] rounded-full border-transparent hover:lg:border-sd-white border-[1px] hover:scale-110"
          />
          <SocialIcon
            index={3}
            social={config.socials[3]}
            containerClassName="absolute lg:py-2 h-full flex justify-center items-end transform rotate-[90deg] z-20"
            childClassName="w-[25px] md:w-[30px] lg:w-[65px] lg:py-4 aspect-square fill-sd-white transform -rotate-[90deg] rounded-full border-transparent hover:lg:border-sd-white border-[1px] hover:scale-110"
          />
        </div>
      </div>
      <div className="w-full pb-8 md:pb-0 md:w-1/2 md:h-full flex justify-start items-center">
        <HeroContent content={config.content} />
      </div>
    </div>
  );
};

export default HeroMain;
