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
    const { column, sort } = order;
    if (sort === 'ASC') {
      const orderASC = () => {
        const primary = planetsFilter.filter((option) => option[column] === 'unknown');
        const second = planetsFilter.filter((option) => option[column] !== 'unknown')
          .sort((a, b) => Number(a[column]) - Number(b[column]));
        return second.concat(primary);
      };
      setPlanetsFilter([...orderASC()]);
    } else {
      setPlanetsFilter([...planetsFilter
        .sort((a, b) => b[column] - a[column])]);
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
