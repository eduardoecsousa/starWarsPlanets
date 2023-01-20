/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import FilterText from '../components/FilterText';
import Table from '../components/Table';
import { PlanetsContext } from '../context/PlanetsProvider';

function SearchPlanets() {
  const { isLoading, doTheFetch } = useContext(PlanetsContext);

  useEffect(() => {
    doTheFetch();
  }, []);

  if (isLoading) {
    return (
      <p>Carregando...</p>
    );
  }
  return (
    <div>
      <FilterText />
      <Table />
    </div>
  );
}

export default SearchPlanets;
