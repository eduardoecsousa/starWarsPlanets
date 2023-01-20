import { useState } from 'react';

function useFilterText() {
  const [planetsFilter, setPlanetsFilter] = useState([]);

  const makeFilter = (seach, planets) => {
    const filterPlanets = planets.filter(({ name }) => name
      .toLowerCase().includes(seach.toLowerCase()));
    setPlanetsFilter(filterPlanets);
  };

  return {
    planetsFilter,
    makeFilter,
  };
}

export default useFilterText;
