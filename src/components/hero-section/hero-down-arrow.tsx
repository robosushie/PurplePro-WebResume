import React from 'react';

const HeroDownArrow: React.FC<{}> = () => {
  return (
    <div className="absolute hidden md:right-10 lg:right-20 xl:right-32 bottom-16 md:w-[80px] lg:w-[100px] aspect-square rounded-full border-[1px] border-sd-white text-sd-white md:flex justify-center items-center">
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        className="fill-sd-white"
      >
        <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
      </svg>
    </div>
  );
};

export default HeroDownArrow;
