import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';

import './Filter.css';

const filter = (props) => {
  const GreyCheckbox = withStyles({
    root: {
      color: grey[400],
      '&$checked': {
        color: grey[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const surahs = [];
  for (const key in props.duas) {
    const data = props.duas[key][0][0];
    surahs.push(
      <li key={key}>
        <div>
          <GreyCheckbox
            value={data.surah.number}
            onChange={props.changeHandler}
          />
          <p>{data.surah.englishName}</p>
        </div>
      </li>
    );
  }

  return (
    <div className="filter">
      <div className="filterTitle">Filter</div>
      <div>
        <ul>
          {surahs.map((surah) => {
            return surah;
          })}
        </ul>
      </div>
    </div>
  );
};

export default filter;
