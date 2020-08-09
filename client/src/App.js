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
  const [filterDuas, setFilterDuas] = useState({});
  const [filterView, setFilterView] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/api/duas')
      .then((res) => {
        // setDuas(res.data.savedData);
        setDuas(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (filterView.length === 0 || filterView[0].length === 0) {
      const copy = { ...duas };
      console.log(copy);
      setFilterDuas(copy);
    } else if (filterView[0] !== undefined && filterView[0].length !== 0) {
      filterView[0].forEach((id) => {
        setFilterDuas((prevFilterDuas) => {
          if (Object.keys(prevFilterDuas).length <= filterView[0].length) {
            return {
              ...prevFilterDuas,
              [id]: duas[id],
            };
          } else if (
            Object.keys(prevFilterDuas).length >= filterView[0].length
          ) {
            const copy = { ...filterDuas };
            for (const key in copy) {
              if (!filterView[0].includes(Number(key))) {
                delete copy[key];
                return copy;
              }
            }
          }
        });
      });
    }
  }, [filterView]);

  const filterHandler = (event) => {
    setFilterView([event]);
  };

  const filter = (
    <div className="filterWrapper">
      <Filter duas={duas} changeHandler={(e) => filterHandler(e)} />
    </div>
  );

  const duaCardList = (
    <div className="duaListWrapper">
      <DuaCardList
        className="duaCardList"
        // duas={Object.keys(filterDuas).length === 0 ? duas : filterDuas}
        duas={filterDuas}
      />
    </div>
  );
  // console.log('rerendering app');
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
