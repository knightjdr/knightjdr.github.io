import React from 'react';

import About from './about/about';
import Blog from './blog/landing/blog-landing-container';
import Footer from './footer/footer';
import Landing from './landing/landing';
import Navbar from './navbar/navbar-container';
import Projects from './projects/projects';
import Skills from './skills/skills-container';

const links = [
  {
    route: '/blog',
    text: 'Blog',
  },
  {
    route: '/cv',
    text: 'CV',
  },
];

const App = () => (
  <div className="app">
    <Navbar
      fixed={false}
      links={links}
    />
    <Landing />
    <About />
    <Projects />
    <Skills />
    <Blog />
    <Footer />
  </div>
);
export default App;
