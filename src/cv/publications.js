import React from 'react';

import List from './publications-list';

import './cv.css';

const pubElement = list => (
  list.map((pub) => {
    let authorString = '';
    const numAuthors = pub.authors.length - 1;
    pub.authors.forEach((author, index) => {
      if (numAuthors === 0) {
        authorString += author;
      } else if (index === numAuthors) {
        authorString += `and ${author}`;
      } else {
        authorString += `${author}, `;
      }
    });
    return (
      <div key={pub.key}>
        {authorString} ({pub.date}). {pub.title}.
        <span className="CV-publications-journal">
          {pub.journal},
        </span>
        {pub.pages}.
      </div>
    );
  })
);

const Publications = () => (
  <div className="CV-publications">
    <div className="CV-section-heading">
      Publications
    </div>
    <div className="CV-publications-content">
      <div className="CV-publications-heading">
        First authored
      </div>
      <div className="CV-publications-list">
        { pubElement(List.first) }
      </div>
      <div className="CV-publications-heading CV-publications-second">
        Co-authored
      </div>
      <div className="CV-publications-list">
        { pubElement(List.co) }
      </div>
    </div>
  </div>
);
export default Publications;
