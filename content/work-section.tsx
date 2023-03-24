import ConstacloudLogo from '@/assets/logos/constacloud.png';
import SHDLogo from '@/assets/logos/shd.png';

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
      image: ConstacloudLogo,
      title: 'Data Science Intern',
      company: 'Constacloud, Korba',
      dates: 'January 2020 - March 2020',
      content: [
        'Responsibilities: - Connect with stake holder, gather requirement, relevant data, data Preparing and cleaning, Data analyzing and providing POC dashboard to stake holders using agile practices.'
      ]
    },
    {
      image: ConstacloudLogo,
      title: 'Data Analyst',
      company: 'Constacloud, Korba',
      dates: 'March 2020 - March 2022',
      content: [
        'Worked closely with the design community to identify business needs, created a problem statement, & developed functional specifications to support software development in Python ecosystem.'
      ]
    },
    {
      image: SHDLogo,
      title: 'Data Science Mentor',
      company: 'Freelance',
      dates: 'November 2019 - Present',
      content: [
        'Mentoring UG and PG students to understand data analysis for project purposes and taught Data Science for intrested individual who are actively looking for campus placements for the campuses like IIT-Bombay, NIT-Raipur etc.'
      ]
    }
  ],
  skills: [
    { icon: Puzzle, title: 'Quantative Analysis' },
    { icon: Puzzle, title: 'Data Analysis' },
    { icon: Puzzle, title: 'Machine Learning' },
    { icon: Puzzle, title: 'Deep Learning' },
    { icon: Puzzle, title: 'Natural Language Processing' }
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
