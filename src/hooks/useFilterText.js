import { useState } from 'react';

function useFilterText() {
  const [planetsFilter, setPlanetsFilter] = useState([]);

  const makeFilterText = (seach, planets) => {
    const filterPlanets = planets.filter(({ name }) => name
      .toLowerCase().includes(seach.toLowerCase()));
    setPlanetsFilter(filterPlanets);
  };

  const makeFilterNumber = (column, comparison, value) => {
    if (comparison === 'maior que') {
      const filterNumberLarge = planetsFilter
        .filter((planet) => Number(planet[column]) > value);
      setPlanetsFilter(filterNumberLarge);
    } else if (comparison === 'menor que') {
      const filterNumberLittle = planetsFilter
        .filter((planet) => Number(planet[column]) < value);
      setPlanetsFilter(filterNumberLittle);
    } else {
      const filterNumberEqual = planetsFilter
        .filter((planet) => Number(planet[column]) === value * 1);
      setPlanetsFilter(filterNumberEqual);
    }
  };

  return {
    planetsFilter,
    makeFilterText,
    makeFilterNumber,
  };
}

export default useFilterText;
