'use client';
import React, { useEffect, useState } from 'react';
import Logo from '@/components/common/logo';
import Menu from '@/components/common/menu';
import { AnimatePresence, motion } from 'framer-motion';
import { isTouchDevice } from '@/utils/touch-device';

import { Raleway, Lato } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'], weight: '400' });

const NavbarDesktop: React.FC<{}> = () => {
  return (
    <div className="absolute hidden left-10 lg:left-20 bottom-0 h-[100px] w-full md:flex justify-between items-center z-50">
      <Menu />
    </div>
  );
};

const MenuBar: React.FC<{ showMenu: any; setShowMenu: any }> = ({
  showMenu,
  setShowMenu
}) => {
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 right-0 h-loader lg:h-screen flex flex-col justify-center items-center bg-sd-white z-50 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <button
            className="absolute p-6 top-0 right-0 w-[80px] aspect-square"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </button>
          <div className="flex flex-col space-y-8">
            <button
              className={`${raleway.className} px-20 py-2 rounded font-black text-xl border-2 text-sd-black border-sd-white hover:border-sd-black w-full`}
              onClick={() => {
                const section: any = document.getElementById('hero-section');
                section.scrollIntoView({ behavior: 'smooth' });
                setShowMenu(false);
              }}
            >
              Home
            </button>
            <button
              className={`${raleway.className} px-20 py-2 rounded font-black text-xl border-2 text-sd-black border-sd-white hover:border-sd-black w-full`}
              onClick={() => {
                const section: any = document.getElementById('about-section');
                section.scrollIntoView({ behavior: 'smooth' });
                setShowMenu(false);
              }}
            >
              About
            </button>
            <button
              className={`${raleway.className} px-20 py-2 rounded font-black text-xl border-2 text-sd-black border-sd-white hover:border-sd-black w-full`}
              onClick={() => {
                const section: any = document.getElementById('work-section');
                section.scrollIntoView({ behavior: 'smooth' });
                setShowMenu(false);
              }}
            >
              Work
            </button>
            <button
              className={`${raleway.className} px-20 py-2 rounded font-black text-xl border-2 text-sd-black border-sd-white hover:border-sd-black w-full`}
              onClick={() => {
                const section: any = document.getElementById('project-section');
                section.scrollIntoView({ behavior: 'smooth' });
                setShowMenu(false);
              }}
            >
              Projects
            </button>
            <button
              className={`${raleway.className} px-20 py-2 rounded font-black text-xl border-2 text-sd-black border-sd-white hover:border-sd-black w-full`}
              onClick={() => {
                const section: any = document.getElementById('contact-section');
                section.scrollIntoView({ behavior: 'smooth' });
                setShowMenu(false);
              }}
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MenuIcon: React.FC<{}> = () => {
  const [inFocus, setInFocus] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <React.Fragment>
      <div
        className="w-[30px] h-[20px] md:w-[40px] md:h-[30px] lg:w-[50px] lg:h-[40px] aspect-square z-10"
        onClick={() => {
          if (!isTouchDevice()) {
            return;
          }
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
        <button
          className="w-full h-full flex flex-col justify-between items-between"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <AnimatePresence>
            <React.Fragment>
              <div className="w-full h-1/6 flex justify-start">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: inFocus ? -45 : 0,
                    x: inFocus ? '-10%' : 0,
                    y: inFocus ? '100%' : 0
                  }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-2/3 full bg-sd-white rounded-full "
                />
              </div>
              <div className="w-full h-1/6 bg-sd-white rounded-full" />
              <div className="w-full h-1/6 flex justify-start">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: inFocus ? 45 : 0,
                    x: inFocus ? '-10%' : 0,
                    y: inFocus ? '-100%' : 0
                  }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-2/3 h-full bg-sd-white rounded-full"
                />
              </div>
            </React.Fragment>
          </AnimatePresence>
        </button>
      </div>
      <MenuBar showMenu={showMenu} setShowMenu={setShowMenu} />
    </React.Fragment>
  );
};

const Navbar: React.FC<{}> = () => {
  return (
    <div className="fixed w-full flex justify-between items-center z-[100] pr-8 lg:pr-16">
      <Logo />
      <MenuIcon />
    </div>
  );
};
export { NavbarDesktop, Navbar };
