import React from 'react';
import Home from './site/Home';
import Sitebar from './navbar/Sitebar';
import Footer from './site/Footer';
import About from './site/About';
import Projects from './site/Projects'
import Contact from './site/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';


function Portfolio() {
  return (
    <div className="App">
      <Sitebar/>
      <Home/>
      <About/>
      <br/>
      <br/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Portfolio;
