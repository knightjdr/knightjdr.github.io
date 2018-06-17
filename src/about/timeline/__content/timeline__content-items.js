import React from 'react';

import './timeline__content-items.css';

const Items = (items, indexSelection, handleItem) => (
  <div className="timeline__content-items">
    { items.map((item, index) => {
      let expandStyle;
      let imgStyle;
      let detailStyle;
      if (index === indexSelection) {
        expandStyle = {
          opacity: 0,
        };
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
        expandStyle = {
          opacity: 1,
        };
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
          className="timeline__content-item"
          key={item.title}
        >
          <button
            className="timeline__content-item-year"
            onClick={() => { handleItem(index); }}
            type="button"
          >
            { item.year }
          </button>
          <div
            className="timeline__content-expander"
            style={expandStyle}
          >
            <button
              className="timeline__content-expander-button"
              onClick={() => { handleItem(index); }}
              type="button"
            >
              •••
            </button>
          </div>
          <div
            className="timeline__content-item-inner"
            style={detailStyle}
          >
            <div className="timeline__content-item-details">
              <div className="timeline__content-item-title">
                { item.title }
              </div>
              { item.details }
            </div>
            <div
              className="timeline__content-item-img"
              style={imgStyle}
            >
              <a
                className="timeline__content-item-link"
                href={item.link}
                rel="noreferrer noopener"
                target="_blank"
              >
                <img
                  alt={item.imgAlt}
                  className="timeline__content-item-img-inner"
                  src={item.img}
                />
              </a>
            </div>
          </div>
        </div>
      );
    }) }
    <div className="timeline__content-item-end" />
  </div>
);
export default Items;
