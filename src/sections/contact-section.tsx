'use client';
import React, { useEffect } from 'react';
import { Raleway, Lato } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: '400' });
const lato = Lato({ subsets: ['latin'], weight: '400' });

import contact_config from '@/content/contact-section';
import { InViewAnimateOnce } from '@/components/common/animations';

const ContactForm: React.FC<{}> = () => {
  useEffect(() => {
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbzuC_INJKR4IIw2Vgb421foZVoiA2OlZL0RtT1rA6iSUjahuDWlRh21_ZFaFossvBAV/exec';
    const forms: any = document.forms;
    const form = forms['submit-to-google-sheet'];

    form.addEventListener('submit', (e: any) => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => alert('Response Submission: Success!'))
        .catch((error) => alert('Response Submission: Failure!'));
    });
  }, []);
  return (
    <InViewAnimateOnce
      transition={{ ease: 'easeIn', duration: 0.5, delay: 0.3 }}
      visible={{ opacity: 1, y: 0 }}
      hidden={{ opacity: 0, y: '20px' }}
      amount={0.3}
      className="w-full h-full flex justify-center items-center text-sd-white"
    >
      <div className="w-full sm:w-11/12 lg:w-4/5 xl:w-2/3 flex flex-col">
        <form
          name="submit-to-google-sheet"
          className="w-full bg-black bg-opacity-40 rounded-xl flex flex-col p-7 lg:p-12 space-y-4 border-sd-purple border-b-4"
        >
          <label className={`${raleway.className} text-lg py-1 px-2`}>
            Enter Your Name
          </label>
          <input
            className={`${raleway.className} text-lg rounded-sm bg-white bg-opacity-10 py-1 px-2`}
            name="Name"
            type="text"
            placeholder="Your Name"
          />
          <label className={`${raleway.className} text-lg py-1 px-2`}>
            Enter Email Id
          </label>
          <input
            className={`${raleway.className} text-lg rounded-sm bg-white bg-opacity-10 py-1 px-2`}
            name="Email"
            type="email"
            placeholder="Email ID"
          />
          <label className={`${raleway.className} text-lg py-1 px-2`}>
            Message
          </label>
          <textarea
            className={`${raleway.className} text-lg rounded-sm bg-white bg-opacity-10 py-1 px-2 `}
            rows={4}
            name="Message"
            placeholder="Message"
          />
          <button
            type="submit"
            className={`${raleway.className} flex justify-center text-lg py-2 px-6 border-sd-white border-2 rounded-md hover:bg-sd-white hover:text-sd-black font-black`}
          >
            Submit
          </button>
        </form>
      </div>
    </InViewAnimateOnce>
  );
};

const ContactTitle: React.FC<{}> = () => {
  return (
    <InViewAnimateOnce
      transition={{ ease: 'easeIn', duration: 0.5 }}
      visible={{ opacity: 1, y: 0 }}
      hidden={{ opacity: 0, y: '20px' }}
      amount={0.3}
      className={`${raleway.className} w-full font-black text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-sd-white`}
    >
      Let&#39;s Connect !
    </InViewAnimateOnce>
  );
};

const ContactContent: React.FC<{ content: string[] }> = ({ content }) => {
  return (
    <InViewAnimateOnce
      transition={{ ease: 'easeIn', duration: 0.5, delay: 0.3 }}
      visible={{ opacity: 1, y: 0 }}
      hidden={{ opacity: 0, y: '20px' }}
      amount={0.3}
      className={`${lato.className} w-full lg:w-4/5 flex flex-col space-y-8 text-lg md:text-lg lg:text-xl text-sd-white`}
    >
      {content.map((value, index) => {
        return <div key={index}>{value}</div>;
      })}
    </InViewAnimateOnce>
  );
};

const ContactSection: React.FC<{}> = () => {
  return (
    <div
      id="contact-section"
      className="relative w-screen lg:h-screen overflow-hidden bg-sd-background"
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-4/5 sm:w-10/12 md:w-11/12 lg:w-10/12  h-full justify-center items-center  py-16 lg:py-24 flex flex-col md:flex-row  space-y-10">
          <div className="w-full h-full flex flex-col justify-center items-center space-y-8 lg:space-y-10">
            <ContactTitle />
            <ContactContent content={contact_config.content} />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
