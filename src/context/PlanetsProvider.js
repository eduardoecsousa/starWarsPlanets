/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import useFilterText from '../hooks/useFilterText';

export const PlanetsContext = createContext();

function PlanetsProvider({ children }) {
  const [allPlanets, setAllplanets] = useState([]);
  const { makeFetch, isLoading } = useFetch();
  const url = 'https://swapi.dev/api/planets';
  const { planetsFilter, makeFilter, orderPlanets } = useFilterText();
  const [planetsFilterScreen, setPlanetsFilterScreen] = useState([]);
  const doTheFetch = async () => {
    const result = await makeFetch(url);

    setAllplanets(result.results);
    makeFilter('', result.results, []);
  };

  useEffect(() => {
    setPlanetsFilterScreen(planetsFilter);
  }, [planetsFilter, orderPlanets]);

  const values = useMemo(() => ({
    allPlanets,
    planetsFilter,
    planetsFilterScreen,
    isLoading,
    doTheFetch,
    makeFilter,
    orderPlanets,
  }), [planetsFilter, isLoading, makeFilter, orderPlanets, planetsFilterScreen]);

  return (
    <PlanetsContext.Provider value={ values }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default PlanetsProvider;
