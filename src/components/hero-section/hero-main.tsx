import React, { useState } from 'react';
import Image from 'next/image';

import SHD from '@/assets/Shreyansh_Dubey.jpg';
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

const HeroMain: React.FC<{}> = () => {
  const [githubHover, setGithubHover] = useState(false);
  return (
    <div className="absolute w-full h-full flex flex-col md:flex-row">
      <div className="w-full grow md:w-1/2 md:h-full flex justify-center items-center">
        <div className="relative h-4/5 md:h-1/2 lg:h-2/3 aspect-square rounded-full flex justify-center items-center">
          <div className="relative h-2/3 aspect-square bg-sd-black rounded-full border-sd-purple border-[1px] overflow-hidden">
            <Image
              src={SHD}
              alt="Shreyansh Dubey"
              className="object-cover"
              fill
            />
          </div>
          <div className="absolute lg:py-2 h-full flex justify-center items-end -rotate-[30deg]">
            <Email
              className="w-[25px] md:w-[30px] lg:w-[65px] lg:py-4 aspect-square fill-sd-white rotate-[30deg] rounded-full border-transparent hover:lg:border-sd-white border-[1px] hover:scale-110"
              onClick={() => {
                window.open('mailto:shreyanshd46@gmail.com', '_blank');
              }}
            />
          </div>
          <div className="absolute lg:py-2 h-full flex justify-center items-end rotate-[10deg]">
            <Github
              className="w-[25px] md:w-[30px] lg:w-[65px] lg:py-4 aspect-square fill-sd-white -rotate-[10deg] rounded-full border-transparent hover:lg:border-sd-white border-[1px] hover:scale-110"
              onClick={() => {
                window.open('https://github.com/3dot14shreyansh', '_blank');
              }}
            />
          </div>
          <div className="absolute lg:py-2 h-full flex justify-center items-end rotate-[50deg]">
            <Linkedin
              className="w-[25px] md:w-[30px] lg:w-[65px] lg:py-4 aspect-square fill-sd-white -rotate-[50deg] rounded-full border-transparent hover:lg:border-sd-white border-[1px] hover:scale-110"
              onClick={() => {
                window.open(
                  'https://www.linkedin.com/in/3dot14shreyansh/',
                  '_blank'
                );
              }}
            />
          </div>
          <div className="absolute lg:py-2 h-full flex justify-center items-end rotate-[90deg]">
            <Instagram
              className="w-[25px] md:w-[30px] lg:w-[65px] lg:py-4 aspect-square fill-sd-white -rotate-[90deg] rounded-full border-transparent hover:lg:border-sd-white border-[1px] hover:scale-110"
              onClick={() => {
                window.open(
                  'https://www.instagram.com/shreyanshdubey10/',
                  '_blank'
                );
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full pb-8 md:pb-0 md:w-1/2 md:h-full flex justify-start items-center">
        <div className="w-full lg:w-4/5 h-full flex flex-col justify-center items-start px-8 xl:px-20">
          <div
            className={`${raleway.className} text-5xl lg:text-6xl xl:text-7xl font-extrabold text-sd-white py-2`}
          >
            Hi, I&#39;m
          </div>
          <div
            className={`${raleway.className} text-5xl lg:text-6xl xl:text-7xl font-extrabold text-sd-purple py-2`}
          >
            Shreyansh
          </div>
          <div
            className={`${raleway.className} text-base lg:text-md xl:text-lg text-sd-white`}
          >
            Data Analyst | Data Science Mentor
          </div>
          <div
            className={`${lato.className} text-lg xl:text-xl text-sd-white py-6 md:py-8`}
          >
            I believe life is one big game of perspective, so I strive to
            analyse data from as many angles as possible.
          </div>
          <div className="flex space-x-4 md:space-x-8">
            <button
              className={`${raleway.className} box-border border-sd-white hover:border-sd-purple hover:text-sd-purple hover:bg-transparent font-bold border-[1px] text-sd-black px-6 py-2 flex justify-center items-center rounded-full bg-sd-white`}
              onClick={() => {
                window.open(
                  'https://drive.google.com/file/d/1TqHXIubwS0JvB1NwOqZuUzbbCLBlD8vc/view',
                  '_blank'
                );
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
              Github
              <div className="absolute h-full top-0 right-0">
                <Github
                  className={
                    githubHover
                      ? 'h-[40px] aspect-square fill-sd-purple'
                      : 'h-[40px] aspect-square fill-sd-white'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
