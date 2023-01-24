/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import FilterNumber from '../components/FilterNumber';
import FilterText from '../components/FilterText';
import OrderPlanets from '../components/OrderPlanets';
import Table from '../components/Table';
import { PlanetsContext } from '../context/PlanetsProvider';

function SearchPlanets() {
  const { isLoading, doTheFetch } = useContext(PlanetsContext);

  useEffect(() => {
    doTheFetch();
  }, []);

  if (isLoading) {
    return (
      <p data-testid="loading">Carregando...</p>
    );
  }
  return (
    <div>
      <FilterText />
      <FilterNumber />
      <OrderPlanets />
      <Table />
    </div>
  );
}

export default SearchPlanets;
