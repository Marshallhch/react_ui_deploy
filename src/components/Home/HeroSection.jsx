import React from 'react';
import { Link } from 'react-router-dom';
import { heroLinks } from '../../constants/data';

import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide dark:text-neutral-300 text-neutral-700">
        AceDot Build Tools
        <span className="bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
          &nbsp; for Developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil et
        impedit qui, accusantium vero culpa. Autem quod ad assumenda cupiditate
        quis est maxime, amet perferendis. Voluptate aperiam adipisci quas et?
      </p>
      <div>
        {heroLinks.map((link, index) => (
          <Link key={index} to={link.to}>
            {link.text}
          </Link>
        ))}
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-indigo-700 shadow-sm shadow-indigo-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-indigo-700 shadow-sm shadow-indigo-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
