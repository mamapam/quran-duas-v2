import React, { useState } from 'react';
import { Checkbox } from 'antd';

import './Filter.css';

const Filter = (props) => {
  // create array of [{label: xxx, value: xxx}]

  const options = [];
  for (const key in props.duas) {
    const data = props.duas[key][0][0];
    options.push({ label: data.surah.englishName, value: data.surah.number });
  }

  return (
    <div className="filter">
      <div className="filterTitle">Filter</div>
      <div>
        <Checkbox.Group
          className="filterOptions"
          options={options}
          onChange={props.changeHandler}
        />
      </div>
    </div>
  );
};

export default Filter;
