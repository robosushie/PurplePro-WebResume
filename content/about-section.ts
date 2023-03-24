import SHD from '@/assets/Shreyansh_Dubey_About.jpg';

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
  image: SHD,
  quote: `"Appreciate everything, even the ordinary. Especially the ordinary. Keep drumming."`,
  content: [
    "I'm a data enthusiast who loves tackling problems by looking at them from multiple angles. Whether it's writing code or living my life, I strive to keep things simple yet intuitive.",
    "When I'm not working, you can find me tending to my in-house garden or hitting the open road. And speaking of roads, I'm passionate about promoting road safety and working towards making our streets safer for everyone."
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
