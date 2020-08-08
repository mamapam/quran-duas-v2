import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Spinner from './components/Spinner/Spinner';
import HeaderBar from './components/HeaderBar/HeaderBar';
import DuaCardList from './components/DuaCardList/DuaCardList';
import Filter from './components/Filter/Filter';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [duas, setDuas] = useState(null);
  const [filterView, setFilterView] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:5000/api/duas')
      .then((res) => {
        setDuas(res.data.savedData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, duas);

  const filterHandler = (event) => {
    setFilterView([event]);
  };

  const filter = (
    <div className="filterWrapper">
      <Filter duas={duas} changeHandler={(e) => filterHandler(e)} />
    </div>
  );

  let duaCardList = null;
  if (filterView.length === 0) {
    duaCardList = (
      <div className="duaListWrapper">
        <DuaCardList className="duaCardList" duas={duas} />
      </div>
    );
  }

  return (
    <div className="App">
      {isLoading ? <Spinner /> : null}
      <div className="header">
        <HeaderBar />
      </div>
      {duas ? filter : null}
      {duas ? duaCardList : null}
    </div>
  );
}

export default App;
