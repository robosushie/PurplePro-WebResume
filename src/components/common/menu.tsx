import React from 'react';

import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: '400' });

const Menu: React.FC<{}> = () => {
  return (
    <div className={`${raleway.className} flex md:space-x-16 lg:space-x-20`}>
      <button className="text-white md:text-md lg:text-lg xl:text-xl py-2 md:px-5 lg:px-6 hover:bg-sd-white hover:text-sd-black  rounded-sm">
        About
      </button>
      <button className="text-white md:text-md lg:text-lg xl:text-xl py-2 md:px-5 lg:px-6 hover:bg-sd-white hover:text-sd-black  rounded-sm">
        Work
      </button>
      <button className="text-white md:text-md lg:text-lg xl:text-xl py-2 md:px-5 lg:px-6 hover:bg-sd-white hover:text-sd-black  rounded-sm">
        Projects
      </button>
      <button className="text-white md:text-md lg:text-lg xl:text-xl py-2 md:px-5 lg:px-6 hover:bg-sd-white hover:text-sd-black  rounded-sm">
        Contact
      </button>
    </div>
  );
};

export default Menu;
