import React, { useState } from 'react';
import { authLink, navItems } from '../constants/data';
import { X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import ModeCtrl from './ModeCtrl';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // console.log(mobileDrawerOpen);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* flex-shrink-0: flex item의 자동 축소 방지, 참조: https://apost.dev/863/ */}
          <div className="flex items-center flex-shrink-0  gap-2">
            <div className="logo w-10 h-10 rounded-full border-neutral-700/80 border flex items-center justify-center">
              <span className="block w-8 h-8 rounded-full bg-indigo-800"></span>
            </div>
            <span className="text-xl tracking-tight">AceDot.Dev</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center gap-2">
            {authLink.map((item, index) => (
              <Link
                to={item.to}
                className={`py-2 px-3 rounded-md ${
                  index === 1
                    ? 'bg-gradient-to-r from-indigo-500 to-indigo-800 border-0 light: text-neutral-200'
                    : 'border'
                }`}
                key={index}
              >
                {item.label}
              </Link>
            ))}
            <ModeCtrl />
          </div>

          <div className="lg:hidden md:flex fexl-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
            <ModeCtrl />
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="absolute right-0 z-20 bg-white w-full p-4 pb-0 flex flex-col justify-center items-center lg:hidden top-full mt-1 dark:bg-neutral-900 border-b border-neutral-900">
            <ul className="w-full">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4 border-b border-neutral-700 w-full text-center"
                >
                  <Link to={item.to} className="block w-full h-full">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex py-4 gap-2">
              {authLink.map((item, index) => (
                <Link
                  to={item.to}
                  className={`py-2 px-3 rounded-md text-xs ${
                    index === 1
                      ? 'bg-gradient-to-r from-indigo-500 to-indigo-800 border-0'
                      : 'border'
                  }`}
                  key={index}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
