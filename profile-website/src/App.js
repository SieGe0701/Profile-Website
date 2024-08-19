import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Resume from './components/Resume/Resume'; 
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/contact/Contact';
import Blog from './components/Blog/blog';

const App = () => {
  return(
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
        <Blog />
      </main>
    </>
  )
}

export default App