import React from 'react';
import { motion } from 'framer-motion';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: '400' });

const MenuItem: React.FC<{ label: string; url: string; delay: number }> = ({
  label,
  url,
  delay
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-30%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <button
        className="text-white md:text-md lg:text-lg xl:text-xl py-2 md:px-5 lg:px-6 hover:bg-sd-white hover:text-sd-black  rounded-sm"
        onClick={() => {
          const section: any = document.getElementById(url);
          section.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {label}
      </button>
    </motion.div>
  );
};

const Menu: React.FC<{}> = () => {
  return (
    <div className={`${raleway.className} flex md:space-x-16 lg:space-x-20`}>
      <MenuItem label="About" url="about-section" delay={1} />
      <MenuItem label="Work" url="work-section" delay={1.3} />
      <MenuItem label="Projects" url="project-section" delay={1.6} />
      <MenuItem label="Contact" url="contact-section" delay={1.9} />
    </div>
  );
};

export default Menu;
