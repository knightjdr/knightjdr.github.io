import React from 'react';

import './timeline.css';

const TimelineItem = (items, indexSelection, handleItem) => (
  <div className="Timeline-item-container">
    { items.map((item, index) => {
      let imgStyle;
      let detailStyle;
      if (index === indexSelection) {
        imgStyle = {
          maxHeight: 180,
          transition: 'margin .25s, max-height .25s',
        };
        detailStyle = {
          fontSize: '1em',
          opacity: 1,
          transition: 'font-size .25s, opacity .5s .25s',
        };
      } else {
        imgStyle = {
          margin: 0,
          maxHeight: 0,
          transition: 'margin .5s .25s, max-height .5s .25s',
        };
        detailStyle = {
          fontSize: 0,
          opacity: 0,
          transition: 'opacity .25s, font-size .5s .25s',
        };
      }
      return (
        <div
          className="Timeline-item"
          key={item.title}
        >
          <button
            className="nobutton Timeline-item-year"
            onClick={() => { handleItem(index); }}
            type="button"
          >
            { item.year }
          </button>
          <div
            className="Timeline-item-content"
            style={detailStyle}
          >
            <div className="Timeline-item-details">
              <div className="Timeline-item-title">
                { item.title }
              </div>
              { item.details }
            </div>
            <div
              className="Timeline-item-img-container"
              style={imgStyle}
            >
              <a
                href={item.link}
                rel="noreferrer noopener"
                target="_blank"
              >
                <img
                  alt={item.imgAlt}
                  className="Timeline-item-img"
                  src={item.img}
                />
              </a>
            </div>
          </div>
        </div>
      );
    }) }
    <div className="Timeline-item-end" />
  </div>
);
export default TimelineItem;
