import React from 'react';

import BannerLeft from './__banner/contact__banner-left';
import BannerRight from './__banner/contact__banner-right';

import './contact.css';

const Contact = () => (
  <section className="contact">
    <BannerLeft />
    <BannerRight />
    <div className="contact__banner-grass" />
    <div className="contact__about">
      <h3>Questions or comments?</h3>
      <a href="mailto:knightjdr@gmail.com?subject=About jamesknight.dev">contact me</a>
    </div>
  </section>
);

export default Contact;
