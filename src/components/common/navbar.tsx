import React from 'react';
import Menu from './menu';

const NavbarDesktop: React.FC<{}> = () => {
  return (
    <div className="absolute hidden left-10 lg:left-20 bottom-0 h-[100px] w-full md:flex justify-between items-center z-50">
      <Menu />
    </div>
  );
};

const NavbarMobile: React.FC<{}> = () => {
  return <div></div>;
};
export { NavbarDesktop, NavbarMobile };
