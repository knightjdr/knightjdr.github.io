import React from 'react';

import List from './cv__talk-list';

import './cv__talks.css';

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
        <strong className="cv__talks-conference">
          {talk.conference},
        </strong>
        {talk.place}.
      </div>
    );
  })
);

const Talks = () => (
  <div className="cv__talks">
    <div className="cv__section-heading">
      Talks
    </div>
    <div className="cv__talks-inner">
      <div className="cv__talks-list">
        { talkElement(List) }
      </div>
    </div>
  </div>
);
export default Talks;
