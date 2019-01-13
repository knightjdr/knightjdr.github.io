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
      <li key={talk.key}>
        {authorString} ({talk.date}). {talk.title}.
        <span className="cv__talks-conference">
          {talk.conference},
        </span>
        {talk.place}.
      </li>
    );
  })
);

const Talks = () => (
  <section className="cv__talks">
    <h2>Talks</h2>
    <div className="cv__talks-inner">
      <ol className="cv__talks-list">
        { talkElement(List) }
      </ol>
    </div>
  </section>
);
export default Talks;
