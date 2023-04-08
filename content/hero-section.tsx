import Profile_Pic from '@/assets/ProfilePic.png';
import Mountain_Cover from '@/assets/Mountain_Cover.jpg';

import {
  Github,
  Instagram,
  Linkedin,
  Twitter
} from '@/components/common/socials';
import { Email } from '@/components/common/icons';

const hero_config = {
  cover: {
    image: Mountain_Cover,
    description: 'Caleb Dev, AI Generated'
  },
  profile: {
    image: Profile_Pic,
    description: 'Caleb Dev, AI Generated'
  },
  socials: [
    { icon: Email, url: '', angle: 330 },
    { icon: Github, url: '', angle: 10 },
    {
      icon: Linkedin,
      url: '',
      angle: 50
    },
    {
      icon: Instagram,
      url: '',
      angle: 90
    }
  ],
  content: {
    intro: ["Hi, I'm", 'Caleb Dev'],
    role: 'AI Generated Character | Freelancer',
    content:
      'Minimalist techie, problem-solver, and globe-trotter. I believe in a simple life, working passionately, and exploring new places with my furry friends.',
    resume: {
      title: 'Resume',
      url: ''
    },
    profile: {
      title: 'Github',
      icon: Github,
      url: ''
    }
  }
};

export default hero_config;
