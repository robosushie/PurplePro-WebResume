'use client';
import React from 'react';
import { Raleway, Lato } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: '400' });
const lato = Lato({ subsets: ['latin'], weight: '400' });

const ContactSection: React.FC<{}> = () => {
  return (
    <div className="relative w-screen lg:h-screen overflow-hidden bg-sd-background py-10 lg:py-20">
      <div className="w-full h-full justify-center items-center px-8 md:px-20 lg:px-24 xl:px-32 flex flex-col md:flex-row  space-y-10">
        <div className="w-full h-full flex flex-col justify-center items-end space-y-8 lg:space-y-16">
          <div
            className={`${raleway.className} w-full font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-outline`}
          >
            Contact
          </div>
          <div
            className={`${lato.className} w-full lg:w-4/5 flex flex-col space-y-8 text-lg md:text-lg lg:text-xl xl:text-2xl text-sd-white`}
          >
            <div>
              If you&#39;re on the hunt for anything related to data science,
              whether it&#39;s learning resources, tips for making a career
              change, or even project collaborations.
            </div>
            <div>
              Even if your interests include dogs, plants, or hybrid automobiles
              (or anything else under the sun!).
            </div>
            <div>I am happy to connect !!</div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center text-sd-white">
          <div className="w-full sm:w-11/12 lg:w-4/5 xl:w-2/3 flex flex-col space-y-4">
            <form className="w-full bg-black bg-opacity-40 rounded-xl flex flex-col p-7 lg:p-12 space-y-4 border-sd-purple border-b-4">
              <label className={`${raleway.className} text-lg py-1 px-2`}>
                Enter Your Name
              </label>
              <input
                className={`${raleway.className} text-lg rounded-sm bg-white bg-opacity-10 py-1 px-2`}
                id="clientname"
                type="text"
                placeholder="Your Name"
              />
              <label className={`${raleway.className} text-lg py-1 px-2`}>
                Enter Email Id
              </label>
              <input
                className={`${raleway.className} text-lg rounded-sm bg-white bg-opacity-10 py-1 px-2`}
                id="clientemail"
                type="text"
                placeholder="Email ID"
              />
              <label className={`${raleway.className} text-lg py-1 px-2`}>
                Message
              </label>
              <textarea
                className={`${raleway.className} text-lg rounded-sm bg-white bg-opacity-10 py-1 px-2 `}
                rows={4}
                id="clientmessage"
                placeholder="Reach out to me..."
              />
              <button
                className={`${raleway.className} flex justify-center text-lg py-2 px-6 border-sd-white border-2 rounded-md hover:bg-sd-white hover:text-sd-black font-black`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
