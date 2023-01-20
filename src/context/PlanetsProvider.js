/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import useFilterText from '../hooks/useFilterText';

export const PlanetsContext = createContext();

function PlanetsProvider({ children }) {
  const [allPlanets, setAllplanets] = useState([]);
  const { makeFetch, isLoading } = useFetch();
  const { planetsFilter, makeFilter } = useFilterText();
  const url = 'https://swapi.dev/api/planets';
  const doTheFetch = async () => {
    console.log(children);
    const result = await makeFetch(url);
    makeFilter('', result.results);
    setAllplanets(result.results);
  };
  const values = useMemo(() => ({
    allPlanets, planetsFilter, isLoading, doTheFetch, makeFilter,
  }), [planetsFilter, isLoading, makeFilter]);

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
