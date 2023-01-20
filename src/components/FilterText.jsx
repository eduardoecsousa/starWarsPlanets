import React, { useContext, useEffect, useState } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';

function FilterText() {
  const { allPlanets, makeFilterText } = useContext(PlanetsContext);
  const [searchText, setSeatchText] = useState('');

  useEffect(() => {

  }, []);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSeatchText(value);
    makeFilterText(value, allPlanets);
  };

  return (
    <div>
      <label htmlFor="name-filter">
        <input
          data-testid="name-filter"
          id="name-filter"
          type="text"
          name="searchText"
          value={ searchText }
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

export default FilterText;
