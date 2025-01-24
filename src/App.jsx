import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import Program from './components/programs/Program.jsx';
import Title from './components/title/Title.jsx';
import About from './components/about/About.jsx';
import Campus from './components/campus/Campus.jsx';
import Testimonials from './components/testimonials/testimonails.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle="Our Program" title="What We Offer" />
        <Program />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What student Says" />
        <Testimonials />
      </div>
    </div>
  );
};

export default App;
