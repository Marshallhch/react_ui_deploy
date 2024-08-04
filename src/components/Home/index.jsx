import React from 'react';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import Workflow from './Workflow';
import Pricing from './Pricing';
import Testimonials from './Testimonial';

const index = () => {
  return (
    <div className="home">
      <div className="container">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
      </div>
    </div>
  );
};

export default index;
