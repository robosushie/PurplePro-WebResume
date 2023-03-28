'use client';
import React from 'react';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectSection,
  WorkSection
} from '@/sections';

import Logo from '@/components/common/logo';
import { Navbar } from '@/components/common/navbar';

export default function Home() {
  return (
    <React.Fragment>
      {/* <Logo /> */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ProjectSection />
      <ContactSection />
      <button
        className="w-full bg-sd-black text-sd-white flex justify-center md:justify-end py-1 px-10 text-sm"
        onClick={() => {
          window.open('https://github.com/robosushie', '_blank');
        }}
      >
        Designed and Developed By : Robosushie
      </button>
    </React.Fragment>
  );
}
