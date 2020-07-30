import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Spinner from './components/Spinner/Spinner';
import HeaderBar from './components/HeaderBar/HeaderBar';
import DuaCardList from './components/DuaCardList/DuaCardList';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [duas, setDuas] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:5000/api/duas')
      .then((res) => {
        setDuas(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const duaCardList = (
    <div className="duaListWrapper">
      <DuaCardList className="duaCardList" duas={duas} />
    </div>
  );

  return (
    <div className="App">
      {isLoading ? <Spinner /> : null}
      <div className="header">
        <HeaderBar />
      </div>
      <div className="filter">Filter goes here</div>
      {duas ? duaCardList : null}
    </div>
  );
}

export default App;
