import { useState } from 'react';

function useFilterText() {
  const [planetsFilter, setPlanetsFilter] = useState([]);

  const makeFilter = (search, planets, filtersArray) => {
    let filterPlanets = planets.filter(({ name }) => name
      .toLowerCase().includes(search.toLowerCase()));
    setPlanetsFilter(filterPlanets);
    filtersArray.forEach((filt) => {
      if (filt.comparison === 'maior que') {
        const filterNumberLarge = filterPlanets
          .filter((planet) => Number(planet[filt.column]) > filt.valueNumber);
        filterPlanets = filterNumberLarge;
      } else if (filt.comparison === 'menor que') {
        const filterNumberLittle = filterPlanets
          .filter((planet) => Number(planet[filt.column]) < filt.valueNumber);
        filterPlanets = filterNumberLittle;
      } else if (filt.comparison === 'igual a') {
        const filterNumberEqual = filterPlanets
          .filter((planet) => Number(planet[filt.column]) === filt.valueNumber * 1);
        filterPlanets = filterNumberEqual;
      }
    });
    setPlanetsFilter(filterPlanets);
  };

  const orderPlanets = ({ order }) => {
    console.log(order);
    const NUMBER = -1;
    const { column, sort } = order;
    if (sort === 'ASC') {
      const orderASC = planetsFilter
        .sort((a, b) => {
          if (a[column] < b[column]) {
            return NUMBER;
          }
          return true;
        });
      setPlanetsFilter(orderASC);
    } else {
      setPlanetsFilter(planetsFilter
        .sort((a, b) => a[column] < b[column]));
    }
    console.log(planetsFilter);
  };

  return {
    planetsFilter,
    makeFilter,
    orderPlanets,
  };
}

export default useFilterText;
