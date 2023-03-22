import React from 'react';
import Image from 'next/image';

import { Raleway, Lato } from 'next/font/google';
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

import Constacloud from '@/assets/logos/constacloud.png';
import Shd from '@/assets/logos/shd.png';

const raleway = Raleway({ subsets: ['latin'], weight: '400' });
const lato = Lato({ subsets: ['latin'], weight: '400' });

const ExperienceCard: React.FC<{
  index: number;
  title: string;
  company: string;
  logo: any;
  description: string[];
  date: string;
}> = ({ index, title, company, logo, description, date }) => {
  return (
    <div className="w-full flex flex-row justify-center text-sd-white">
      {index % 2 == 1 && <div className="hidden sm:flex w-full h-full p-6" />}
      {index % 2 == 0 && (
        <div className="hidden sm:flex justify-end w-full h-full p-6">
          <div className="w-full p-6 bg-sd-purple bg-opacity-10 rounded-md border-b-4 border-sd-purple">
            <div
              className={`${raleway.className} text-3xl lg:text-4xl font-black py-2`}
            >
              {title}
            </div>
            <div className={`${raleway.className} text-base lg:text-lg`}>
              {company}
            </div>
            <div className={`${raleway.className} text-base lg:text-lg`}>
              {date}
            </div>
            {/* <hr className="my-2" /> */}
            <ul className="hidden md:block py-4">
              {description.map((val, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${lato.className} lg:text-base py-1`}
                  >
                    {val}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      <div className="relative min-w-[60px] h-full py-6 ">
        <div className="absolute top-0 left-0 w-1/2 h-full border-sd-white border-r-2 " />
        <div className="absolute top-0 right-0 w-1/2 h-full border-sd-white border-l-2 " />
        <div className="relative w-full aspect-square bg-sd-white border-sd-white rounded-full border-4">
          <Image src={logo} alt={title} className="object-contain p-1" fill />
        </div>
      </div>

      {index % 2 == 0 && <div className="hidden sm:flex w-full h-full p-6" />}
      {index % 2 == 1 && (
        <div className="hidden sm:flex justify-start w-full h-full p-6">
          <div className="w-full p-6 bg-sd-purple bg-opacity-10 rounded-md border-b-4 border-sd-purple">
            <div
              className={`${raleway.className} text-3xl lg:text-4xl font-black py-2`}
            >
              {title}
            </div>
            <div className={`${raleway.className} text-base lg:text-lg `}>
              {company}
            </div>
            <div className={`${raleway.className} text-base lg:text-lg `}>
              {date}
            </div>
            {/* <hr className="my-2" /> */}
            <ul className="hidden md:block py-4">
              {description.map((val, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${lato.className} lg:text-base py-1`}
                  >
                    {val}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      <div className="flex sm:hidden justify-start w-full h-full p-6">
        <div className="w-full p-6 bg-sd-purple bg-opacity-10 rounded-md border-b-4 border-sd-purple">
          <div
            className={`${raleway.className} text-3xl lg:text-4xl font-black py-2`}
          >
            {title}
          </div>
          <div className={`${raleway.className} text-base `}>{company}</div>
          <div className={`${raleway.className} text-base `}>{date}</div>
          {/* <hr className="my-2" /> */}
          <ul className="hidden md:block py-4">
            {description.map((val, idx) => {
              return (
                <li key={idx} className={`${lato.className} lg:text-base py-1`}>
                  {val}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const SkillsCard: React.FC<{ title: string; logo: any }> = ({
  title,
  logo
}) => {
  return (
    <div className="relative w-[150px] aspect-square flex flex-col justify-center items-center m-8 p-8 border-sd-purple border-2 rounded-2xl">
      <div className="absolute w-[70px] -top-[35px] p-2 bg-sd-background">
        {logo}
      </div>
      <div
        className={`${raleway.className} font-bold text-sd-white text-center`}
      >
        {title}
      </div>
    </div>
  );
};

const LibrariesCard: React.FC<{ logo: any; title: string }> = ({
  logo,
  title
}) => {
  return (
    <div className="overflow-hidden relative w-[60px] aspect-square bg-sd-white rounded-full flex justify-center items-center m-4">
      <Image src={logo} alt={title} className="object-contain p-1" fill />
    </div>
  );
};

const WorkSection: React.FC<{}> = () => {
  return (
    <div className="relative w-screen overflow-hidden bg-sd-background py-2">
      <div
        className={`${raleway.className} p-12 md:p-24 w-full flex justify-center text-5xl md:text-6xl lg:text-7xl font-black text-sd-white`}
      >
        Work Experience
      </div>
      <div className="w-full flex justify-center">
        <div className="w-11/12 md:w-5/6 flex flex-col">
          <ExperienceCard
            index={0}
            title="Data Analyst"
            company="Constacloud, Korba"
            logo={Constacloud}
            description={[
              'Worked closely with the design community to identify business needs, created a problem statement, & developed functional specifications to support software development in Python ecosystem.'
            ]}
            date="March 2020 - March 2022"
          />
          <ExperienceCard
            index={1}
            title="Data Science Intern"
            company="Constacloud, Korba"
            logo={Constacloud}
            description={[
              'Responsibilities: - Connect with stake holder, gather requirement, relevant data, data Preparing and cleaning, Data analyzing and providing POC dashboard to stake holders using agile practices.'
            ]}
            date="January 2020 - March 2020"
          />
          <ExperienceCard
            index={2}
            title="Data Science Mentor"
            company="Freelance"
            logo={Shd}
            description={[
              'Mentoring UG and PG students to understand data analysis for project purposes and taught Data Science for intrested individual who are actively looking for campus placements for the campuses like IIT-Bombay, NIT-Raipur etc.'
            ]}
            date="November 2019 - Present"
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center pt-20 lg:pt-24 pb-10">
        <SkillsCard
          title="Quantative Analysis"
          logo={<Puzzle className="fill-sd-white w-full" />}
        />
        <SkillsCard
          title="Data Analysis"
          logo={<Puzzle className="fill-sd-white w-full" />}
        />
        <SkillsCard
          title="Machine Learning"
          logo={<Puzzle className="fill-sd-white w-full" />}
        />
        <SkillsCard
          title="Deep Learning"
          logo={<Puzzle className="fill-sd-white w-full" />}
        />
        <SkillsCard
          title="Natural Language Processing"
          logo={<Puzzle className="fill-sd-white w-full" />}
        />
      </div>
      <div className="w-full flex flex-wrap justify-center mb-20 px-6 sm:px-12 md:px-20 lg:px-32">
        <LibrariesCard logo={Sklearn} title="Scikit Learn, SKLearn" />
        <LibrariesCard logo={Spacy} title="Spacy, NLTK" />
        <LibrariesCard logo={Nltk} title="NLTK" />
        <LibrariesCard logo={Numpy} title="Python, Numpy" />
        <LibrariesCard logo={Pandas} title="Pandas" />
        <LibrariesCard logo={Matplotlib} title="Matplotlib" />
        <LibrariesCard logo={Seaborn} title="Seaborn" />
        <LibrariesCard logo={Opencv} title="OpenCV" />
        <LibrariesCard logo={Flask} title="Flask" />
        <LibrariesCard logo={Keras} title="Keras" />
        <LibrariesCard logo={Tensorflow} title="Tensorflow" />
      </div>
    </div>
  );
};

export default WorkSection;
