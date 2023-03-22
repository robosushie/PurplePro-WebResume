import React from 'react';
import Image from 'next/image';

import Mountain_Cover from '@/assets/Mountain_Cover.jpg';

const HeroBackground: React.FC<{}> = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-1/3 sm:h-full -z-10">
      <Image
        src={Mountain_Cover}
        alt="Shreyansh Dubey"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default HeroBackground;
