import SHD from '@/assets/Shreyansh_Dubey.jpg';
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
    description: 'Shreyansh Dubey | Data Analyst, Data Science'
  },
  profile: {
    image: SHD,
    description: 'Shreyansh Dubey | Data Analyst, Data Science'
  },
  socials: [
    { icon: Email, url: 'mailto:shreyanshd46@gmail.com', angle: 330 },
    { icon: Github, url: 'https://github.com/3dot14shreyansh', angle: 10 },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/3dot14shreyansh/',
      angle: 50
    },
    {
      icon: Instagram,
      url: 'https://www.instagram.com/shreyanshdubey10/',
      angle: 90
    }
  ],
  content: {
    intro: ["Hi, I'm", 'Shreyansh'],
    role: 'Data Analyst | Data Science Mentor',
    content:
      'I believe life is one big game of perspective, so I strive to analyse data from as many angles as possible.',
    resume: {
      url: 'https://drive.google.com/file/d/1TqHXIubwS0JvB1NwOqZuUzbbCLBlD8vc/view'
    },
    profile: {
      title: 'Github',
      icon: Github,
      url: 'https://github.com/3dot14shreyansh'
    }
  }
};

export default hero_config;
