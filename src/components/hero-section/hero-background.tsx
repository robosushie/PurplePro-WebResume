import React from 'react';
import Image from 'next/image';

import Mountain_Cover from '@/assets/Mountain_Cover.jpg';

const HeroBackground: React.FC<{ cover: any }> = ({ cover }) => {
  return (
    <React.Fragment>
      <div className="absolute top-0 left-0 w-full h-1/3 sm:h-full">
        <Image
          src={cover.image}
          alt={cover.description}
          fill
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full hidden md:flex flex-col">
        <div className="grow w-full flex">
          <div className="w-1/2 h-full" />
          <div className="w-1/2 h-full flex justify-start items-center">
            <div className="w-full lg:w-4/5 h-full bg-black bg-opacity-50 backdrop-blur" />
          </div>
        </div>
        <div className="w-full h-[100px] bg-black bg-opacity-50 backdrop-blur"></div>
      </div>
    </React.Fragment>
  );
};

export default HeroBackground;
