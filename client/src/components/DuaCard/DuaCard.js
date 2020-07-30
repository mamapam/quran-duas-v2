import React from 'react';

import './DuaCard.css';
import DuaCardVerse from '../DuaCardVerse/DuaCardVerse';

const duaCard = (props) => {
  return (
    <div className="duaCard">
      <div className="title">
        <span>
          <h2>{props.surahNum}</h2>
        </span>
        <span>
          <h3>
            {props.surahNameEnglish} | {props.surahNameTranslation}
          </h3>
        </span>
        <h3>
          <span className="surahArabicName">{props.surahNameArabic}</span>
        </h3>
      </div>
      <div className="verses">
        {props.verses.map((verse, index) => {
          return (
            <DuaCardVerse
              key={index}
              english={verse[0].text}
              urdu={verse[1].text}
              isLast={index ? 1 : 0}
              surahNum={props.surahNum}
              surahVerse={verse[0].numberInSurah}
            />
          );
        })}
      </div>
    </div>
  );
};

export default duaCard;
