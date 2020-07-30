import React from 'react';

import './DuaCard.css';
import DuaCardVerse from '../DuaCardVerse/DuaCardVerse';

const duaCard = (props) => {
  return (
    <div className="duaCard">
      <div className="title">
        <span>{props.surahNum}</span>
        <span>
          {props.surahNameEnglish} | {props.surahNameTranslation}
        </span>
        <span>{props.surahNameArabic}</span>
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
