
import React from 'react';
import Hero from '../components/Hero';
import BusinessLines from '../components/BusinessLines';
import CompanyProfile from '../components/CompanyProfile';
import Message from '../components/Message';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <BusinessLines />
      <Message />
      <CompanyProfile />
      <Contact />
    </div>
  );
};

export default Home;
