import React from 'react';

import List from './cv__publication-list';

import './cv__publications.css';

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
        <strong className="cv__publications-journal">
          {pub.journal},
        </strong>
        {pub.pages}.
      </div>
    );
  })
);

const Publications = () => (
  <div className="cv__publications">
    <div className="cv__section-heading">
      Publications
    </div>
    <div className="cv__publications-inner">
      <div className="cv__publications-heading">
        First authored
      </div>
      <div className="cv__publications-list">
        { pubElement(List.first) }
      </div>
      <div className="cv__publications-heading cv__publications-second">
        Co-authored
      </div>
      <div className="cv__publications-list">
        { pubElement(List.co) }
      </div>
    </div>
  </div>
);
export default Publications;
