'use client';
import React, { useEffect } from 'react';

import { Raleway, Lato } from 'next/font/google';

import { NavbarDesktop } from '@/components/common/navbar';
import {
  HeroBackground,
  HeroDownArrow,
  HeroMain
} from '@/components/hero-section';

import hero_config from '@/content/hero-section';

const HeroSection: React.FC<{}> = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  return (
    <div
      id="hero-section"
      className="relative w-screen h-loader lg:h-screen overflow-hidden bg-sd-background"
    >
      <NavbarDesktop />
      <HeroBackground cover={hero_config.cover} />
      <HeroDownArrow />
      <HeroMain config={hero_config} />
    </div>
  );
};

export default HeroSection;
