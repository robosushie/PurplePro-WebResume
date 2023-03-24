import Adas from '@/assets/projects/adas.jpeg';
import AmbitionBox from '@/assets/projects/ambitionbox.jpeg';
import Covid19 from '@/assets/projects/covid19.jpg';
import HeyCoffee from '@/assets/projects/heycoffee.png';
import Message from '@/assets/projects/message.jpg';
import Ngram from '@/assets/projects/ngram.jpg';
import Whatsapp from '@/assets/projects/whatsapp.jpg';

const project_config = {
  projects: [
    {
      title: 'N-Gram Language Model',
      description: 'N-Gram Language.',
      image: Ngram,
      github: 'https://github.com/3dot14shreyansh/N-Gram-Language-Model',
      tags: ''
    },
    {
      title: 'Message Classifier',
      description:
        'Implementation of message classifier which classifies messages to either spam or personal.',
      image: Message,
      github: 'https://github.com/3dot14shreyansh/message-classifier',
      tags: ''
    },
    {
      title: 'Ambition Box',
      description: 'Implementation of web scrapping using python.',
      image: AmbitionBox,
      github: 'https://github.com/3dot14shreyansh/Web-Scraping-Ambition-box-',
      tags: ''
    },
    {
      title: 'WhatsApp Chat Analyser',
      description:
        'Web based app to analyse WhatsApp chat between two indivduals or a group conversation.',
      image: Whatsapp,
      github: 'https://github.com/3dot14shreyansh/WhatsApp-chat-analyser-app',
      tags: ''
    },
    {
      title: 'Hey Coffee',
      description: 'Voice Assistant App.',
      image: HeyCoffee,
      github: 'https://github.com/3dot14shreyansh/Hey-Coffee',
      tags: ''
    },
    {
      title: 'Covid 19 Analysis',
      description:
        'Used Matplotlib and Seaborn library for holistic statewise analysis of Covid 19 pandemic.',
      image: Covid19,
      github: 'https://github.com/3dot14shreyansh/COVID19-EDA',
      tags: ''
    },
    {
      title: 'Autonomous Vehicle Program',
      description: 'Currently Building !!',
      image: Adas,
      github: 'https://github.com/3dot14shreyansh/ADAS_Autonomus_vehicle',
      tags: ''
    }
  ]
};

export default project_config;
