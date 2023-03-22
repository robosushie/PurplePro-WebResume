import React from 'react';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectSection,
  WorkSection
} from '@/sections';
import { Inter } from 'next/font/google';
import Logo from '@/components/common/logo';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <React.Fragment>
      <Logo />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ProjectSection />
      <ContactSection />
    </React.Fragment>
  );
}
