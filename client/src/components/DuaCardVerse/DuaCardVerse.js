import React from 'react';

import './DuaCardVerse.css';

const DuaCardVerse = (props) => {
  const images = require.context('../../assets/quran', true);
  let img = images('./' + props.surahNum + '_' + props.surahVerse + '.png');

  return (
    <div className="duaCardVerse">
      <img src={img} alt="verse" />
      <p className="english">{props.english}</p>
      <p className="urdu">{props.urdu}</p>
    </div>
  );
};

export default DuaCardVerse;
