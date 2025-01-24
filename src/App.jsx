import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import Program from './components/programs/program.jsx'
import Title from './components/title/title.jsx'
import About from './components/about/about.jsx'
import Campus from './components/campus/campus.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title  subTitle = "Our Program" title ="What We Offer"/>
        <Program />
        <About/>
        <Title  subTitle = "Gallery" title ="Campus Photos"/>
        <Campus />
      </div>
      
    </div>
  )
}

export default App;
