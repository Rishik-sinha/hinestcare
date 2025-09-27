import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FloatingCards from '../components/FloatingCards';
import WhyChooseUs from '../components/WhyChooseUs';
import Feedback from '../components/Feedback';
import HowItWorks from '../components/HowItWorks';
import Estimate from '../components/Estimate';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <FloatingCards />
      <WhyChooseUs />
      <HowItWorks />
      <Estimate />
      <Feedback /> {/* This section has been moved here */}
    </>
  );
};

export default HomePage;