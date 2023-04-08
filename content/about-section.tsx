import AboutPic from '@/assets/AboutPic1.png';

import {
  Books,
  Camera,
  Car,
  Coffee,
  Cycle,
  Headphone,
  Pet
} from '@/components/common/icons';

const about_config = {
  image: AboutPic,
  quote: `"Embrace complexity, live simply, and wander endlessly."`,
  content: [
    "I'm Caleb Dev, a data analyst and software developer with a knack for tackling complex problems. I'm passionate about freelancing, allowing me the flexibility to explore the world while working.",
    "When I'm not coding or analyzing data, you can find me on the road, discovering new places and cultures, accompanied by my four-legged companions. My journey as a digital nomad has taught me to adapt quickly, think creatively, and appreciate the diverse perspectives that enrich my life and work."
  ],
  interests: [
    { icon: Coffee, details: 'Caffeine enthusiast' },
    { icon: Headphone, details: 'All genre tunes' },
    { icon: Pet, details: 'Passionate about furry friends & plants' },
    { icon: Car, details: 'Fueling Passion for Toyota & Land Rover' },
    { icon: Camera, details: 'Romanticizing life through my shots' },
    { icon: Cycle, details: 'Pedaling through urban adventures' },
    { icon: Books, details: "I read when I'm bored" }
  ]
};

export default about_config;
