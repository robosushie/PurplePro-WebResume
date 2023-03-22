import React, { useEffect, useState } from 'react';

import { Raleway, Lato } from 'next/font/google';
import {
  Books,
  Camera,
  Car,
  Coffee,
  Cycle,
  Headphone,
  Pet
} from '@/components/common/icons';

import Image from 'next/image';
import SHD_A from '@/assets/Shreyansh_Dubey_About.jpg';

const raleway = Raleway({ subsets: ['latin'], weight: '400' });
const lato = Lato({ subsets: ['latin'], weight: '400' });

const AboutSection: React.FC<{}> = () => {
  return (
    <div className="relative w-screen overflow-hidden bg-sd-background py-8 lg:py-16">
      <div className="absolute left-0 bottom-0 w-full h-0.5 lg:h-0.5 flex justify-center items-center z-30">
        <div className="h-full w-1/2 bg-sd-purple" />
      </div>
      <div className="absolute left-0 top-0 h-full w-1 lg:w-1 flex justify-center items-center z-30">
        <div className="w-full h-1/2 bg-sd-purple" />
      </div>
      <div className="absolute left-1/2 md:left-1/3 top-[70px] lg:top-[100px] h-1/2 w-full border-sd-purple border-2 " />

      <div className="relative w-full h-full flex flex-col md:flex-row pt-24 lg:pt-32">
        <div className="relative w-full lg:w-1/2 flex flex-col justify-end items-end sm:items-center md:items-end px-10 md:px-0 pb-8 bg-sd-background ">
          <div
            className={`${raleway.className} z-[10] absolute top-0 text-right text-outline text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none font-black w-4/5 py-2`}
          >
            About Me
          </div>
          <div className="relative w-full sm:w-1/2 md:w-full lg:w-2/3 right-0 aspect-square overflow-hidden mt-8 rounded-md">
            <Image
              src={SHD_A}
              alt="Picture of the author"
              className="object-cover"
              fill
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col space-y-6 lg:space-y-10 justify-center items-center bg-sd-background py-2">
          <div
            className={`${lato.className} text-sd-white text-lg lg:text-xl w-4/5 lg:w-2/3`}
          >
            Appreciate everything, even the ordinary. Especially the ordinary.
            Keep drumming.
          </div>
          <div
            className={`${lato.className} text-sd-white text-lg lg:text-xl w-4/5 lg:w-2/3`}
          >
            I&#39;m a data enthusiast who loves tackling problems by looking at
            them from multiple angles. Whether it&#39;s writing code or living
            my life, I strive to keep things simple yet intuitive.
          </div>
          <div
            className={`${lato.className} text-sd-white text-lg lg:text-xl w-4/5 lg:w-2/3`}
          >
            When I&#39;m not working, you can find me tending to my in-house
            garden or hitting the open road. And speaking of roads, I&#39;m
            passionate about promoting road safety and working towards making
            our streets safer for everyone.
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-sd-background z-20">
        <div className="w-4/5 flex flex-wrap justify-center items-center py-10 bg-sd-background z-20">
          <div className="w-12 lg:w-16 aspect-square flex justify-center items-center m-2 lg:m-4 p-3 lg:p-4 border-sd-white border-[1px] rounded-full">
            <Coffee className="w-full h-full fill-sd-white" />
          </div>
          <div className="w-12 lg:w-16 aspect-square flex justify-center items-center m-2 lg:m-4 p-3 lg:p-4 border-sd-white border-[1px] rounded-full">
            <Headphone className="w-full h-full fill-sd-white" />
          </div>
          <div className="w-12 lg:w-16 aspect-square flex justify-center items-center m-2 lg:m-4 p-3 lg:p-4 border-sd-white border-[1px] rounded-full">
            <Pet className="w-full h-full fill-sd-white" />
          </div>
          <div className="w-12 lg:w-16 aspect-square flex justify-center items-center m-2 lg:m-4 p-3 lg:p-4 border-sd-white border-[1px] rounded-full">
            <Car className="w-full h-full fill-sd-white" />
          </div>
          <div className="w-12 lg:w-16 aspect-square flex justify-center items-center m-2 lg:m-4 p-3 lg:p-4 border-sd-white border-[1px] rounded-full">
            <Camera className="w-full h-full fill-sd-white" />
          </div>
          <div className="w-12 lg:w-16 aspect-square flex justify-center items-center m-2 lg:m-4 p-3 lg:p-4 border-sd-white border-[1px] rounded-full">
            <Cycle className="w-full h-full fill-sd-white" />
          </div>
          <div className="w-12 lg:w-16 aspect-square flex justify-center items-center m-2 lg:m-4 p-3 lg:p-4 border-sd-white border-[1px] rounded-full">
            <Books className="w-full h-full fill-sd-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

{
  /*  */
}
