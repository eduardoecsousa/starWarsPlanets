/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import useFetch from '../hooks/useFetch';

function SearchPlanets() {
  const [planetsStarWars, setPlanetsStarWars] = useState({});
  const url = 'https://swapi.dev/api/planets';
  const { makeFetch, isLoading } = useFetch();

  useEffect(() => {
    const doTheFetch = async () => {
      setPlanetsStarWars(await makeFetch(url));
    };
    doTheFetch();
  }, []);

  if (isLoading) {
    return (
      <p>Carregando...</p>
    );
  }
  return (
    <div>
      <Table planets={ planetsStarWars } />
    </div>
  );
}

export default SearchPlanets;
