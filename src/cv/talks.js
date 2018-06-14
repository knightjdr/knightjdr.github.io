import React from 'react';

import List from './talks-list';

import './cv.css';

const talkElement = list => (
  list.map((talk) => {
    let authorString = '';
    const numAuthors = talk.authors.length - 1;
    talk.authors.forEach((author, index) => {
      if (numAuthors === 0) {
        authorString += author;
      } else if (index === numAuthors) {
        authorString += `and ${author}`;
      } else {
        authorString += `${author}, `;
      }
    });
    return (
      <div key={talk.key}>
        {authorString} ({talk.date}). {talk.title}.
        <strong className="CV-talks-conference">
          {talk.conference},
        </strong>
        {talk.place}.
      </div>
    );
  })
);

const Talks = () => (
  <div className="CV-talks">
    <div className="CV-section-heading">
      Talks
    </div>
    <div className="CV-talks-content">
      <div className="CV-talks-list">
        { talkElement(List) }
      </div>
    </div>
  </div>
);
export default Talks;
