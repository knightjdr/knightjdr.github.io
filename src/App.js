import React from 'react';

import About from './about/about';
import Footer from './footer/footer';
import Landing from './landing/landing';
import Navbar from './navbar/navbar-container';
import Projects from './projects/projects';
import Publications from './publications/publications';
import Skills from './skills/skills';

import './App.css';

const links = [
  {
    route: '/education',
    text: 'EDUCATION',
  },
  {
    route: '/publications',
    text: 'PUBLICATIONS',
  },
];

const App = () => (
  <div className="App">
    <Navbar
      fixed={false}
      links={links}
    />
    <Landing />
    <About />
    <Projects />
    <Skills />
    <Publications />
    <Footer />
  </div>
);
export default App;
