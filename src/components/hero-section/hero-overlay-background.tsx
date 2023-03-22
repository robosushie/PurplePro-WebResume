import React from 'react';

const HeroOverlayBackground: React.FC<{}> = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full hidden md:flex flex-col">
      <div className="grow w-full flex">
        <div className="w-1/2 h-full" />
        <div className="w-1/2 h-full flex justify-start items-center">
          <div className="w-full lg:w-4/5 h-full bg-black bg-opacity-50 backdrop-blur-sm" />
        </div>
      </div>
      <div className="w-full h-[100px] bg-black bg-opacity-50 backdrop-blur-sm"></div>
    </div>
  );
};

export default HeroOverlayBackground;
