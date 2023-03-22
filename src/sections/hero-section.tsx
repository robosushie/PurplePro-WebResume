'use client';
import React, { useEffect } from 'react';

import localFont from 'next/font/local';

import {
  Inter,
  Lato,
  Roboto_Condensed,
  Oswald,
  Raleway
} from 'next/font/google';

import {
  Instagram,
  Linkedin,
  Twitter,
  Github
} from '@/components/common/socials';

import { NavbarDesktop } from '@/components/common/navbar';
import {
  HeroBackground,
  HeroDownArrow,
  HeroMain,
  HeroOverlayBackground
} from '@/components/hero-section';
import Logo from '@/components/common/logo';

const lato = Lato({ subsets: ['latin'], weight: '400' });
const roboto = Raleway({ subsets: ['latin'], weight: '400' });

const HeroSection: React.FC<{}> = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  return (
    <div className="relative w-screen h-loader lg:h-screen overflow-hidden bg-sd-background z-20">
      {/* <Logo /> */}
      <NavbarDesktop />
      <HeroBackground />
      <HeroOverlayBackground />
      <HeroDownArrow />
      <HeroMain />
    </div>
  );
};

export default HeroSection;
