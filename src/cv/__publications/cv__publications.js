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
      <li key={pub.key}>
        {authorString} ({pub.date}). {pub.title}.
        <span className="cv__publications-journal">
          {pub.journal},
        </span>
        {pub.pages}.
      </li>
    );
  })
);

const Publications = () => (
  <section
    className="cv__publications"
    id="publications"
  >
    <h2>Publications</h2>
    <div className="cv__publications-inner">
      <h3>First authored</h3>
      <ol className="cv__publications-list">
        { pubElement(List.first) }
      </ol>
      <h3>Co-authored</h3>
      <ol className="cv__publications-list">
        { pubElement(List.co) }
      </ol>
    </div>
  </section>
);
export default Publications;
