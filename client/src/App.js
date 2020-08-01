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
  }, []);

  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilterView((filterView) => [...filterView, event.target.value]);
      console.log('got it checked');
    } else {
      console.log('it was unchecked');
    }
    //console.log(event.target.checked);
  };

  const duaCardList = (
    <div className="duaListWrapper">
      <DuaCardList className="duaCardList" duas={duas} />
    </div>
  );

  const filter = (
    <div className="filterWrapper">
      <Filter duas={duas} changeHandler={filterHandler} />
    </div>
  );

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
