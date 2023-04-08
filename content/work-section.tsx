import Logo from '@/assets/logos/logo.png';

import { Puzzle } from '@/components/common/icons';

import Sklearn from '@/assets/logos/sklearn.png';
import Spacy from '@/assets/logos/spacy.png';
import Nltk from '@/assets/logos/nltk.png';
import Numpy from '@/assets/logos/numpy.png';
import Pandas from '@/assets/logos/pandas.png';
import Matplotlib from '@/assets/logos/matplotlib.png';
import Seaborn from '@/assets/logos/seaborn.png';
import Opencv from '@/assets/logos/opencv.png';
import Flask from '@/assets/logos/flask.png';
import Keras from '@/assets/logos/keras.png';
import Tensorflow from '@/assets/logos/tensorflow.png';

const work_config = {
  experience: [
    {
      image: Logo,
      title: 'Data Analyst',
      company: 'TechVoyagers',
      dates: 'Aug 2018 - July 2020',
      content: [
        'Utilized data analytics techniques to optimize processes and improve client satisfaction, leading to a 20% increase in revenue for the company.'
      ]
    },
    {
      image: Logo,
      title: 'Software Developer',
      company: 'CodeXplore',
      dates: 'Aug 2020 - July 2022',
      content: [
        'Designed and implemented custom software solutions for diverse clientele, enhancing business productivity and streamlining operations.'
      ]
    },
    {
      image: Logo,
      title: 'Freelance Consultant',
      company: 'ByteMasters',
      dates: 'Aug 2023 - Present',
      content: [
        'Assisted businesses with data-driven decision making and software development, ensuring tailored solutions and long-term success.'
      ]
    }
  ],
  skills: [
    {
      icon: Puzzle,
      title: 'Data Analysis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: Puzzle,
      title: 'Software Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: Puzzle,
      title: 'Problem Solving',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: Puzzle,
      title: 'Machine Learning',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: Puzzle,
      title: 'Deep Learning',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ],
  libraries: [
    { logo: Sklearn, title: 'Scikit Learn, SKLearn' },
    { logo: Spacy, title: 'Spacy, NLTK' },
    { logo: Nltk, title: 'NLTK' },
    { logo: Numpy, title: 'Python, Numpy' },
    { logo: Pandas, title: 'Pandas' },
    { logo: Matplotlib, title: 'Matplotlib' },
    { logo: Seaborn, title: 'Seaborn' },
    { logo: Opencv, title: 'OpenCV' },
    { logo: Flask, title: 'Flask' },
    { logo: Keras, title: 'Keras' },
    { logo: Tensorflow, title: 'Tensorflow' }
  ]
};

export default work_config;
