import React from 'react';

import About from './about/about';
import Landing from './landing/landing';
import Navbar from './navbar/navbar-container';
import Projects from './projects/projects';

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
      background={false}
      links={links}
    />
    <Landing />
    <About />
    <Projects />
  </div>
);
export default App;
