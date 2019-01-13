import React from 'react';

import About from './about/about';
import Contact from './contact/contact';
import Footer from './footer/footer';
import Landing from './landing/landing';
import Navbar from './navbar/navbar-container';
import Projects from './projects/projects';
import Skills from './skills/skills';

import './App.css';

const links = [
  {
    route: '/cv',
    text: 'CV',
  },
];

const App = () => (
  <main className="app">
    <Navbar
      fixed={false}
      links={links}
      showLogo={false}
    />
    <Landing />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </main>
);
export default App;
