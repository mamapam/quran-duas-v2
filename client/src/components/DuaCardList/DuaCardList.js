import React from 'react';
import DuaCard from '../DuaCard/DuaCard';

import './DuaCardList.css';

const duaCardList = (props) => {
  let duaCards = [];

  for (const key in props.duas) {
    const data = props.duas[key][0][0];
    // console.log('verses', props.duas[key]);
    duaCards.push(
      <DuaCard
        key={key}
        surahNum={data.surah.number}
        surahNameEnglish={data.surah.englishName}
        surahNameTranslation={data.surah.englishNameTranslation}
        surahNameArabic={data.surah.name}
        verses={props.duas[key]}
      />
    );
  }

  return <div className="duaCardList">{duaCards}</div>;
};

export default duaCardList;
