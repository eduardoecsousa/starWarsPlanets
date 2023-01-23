import React, { useContext, useState } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';
import { optionsColumns } from '../hooks/useEditListFilter';

function OrderPlanets() {
  const [columnSort, setColumnSort] = useState('population');
  const [sort, setSort] = useState('');
  const { orderPlanets } = useContext(PlanetsContext);

  const orderListPlanets = () => {
    const order = { column: columnSort, sort };
    orderPlanets({ order });
  };

  return (
    <div>
      <label htmlFor="column-sort">
        <select
          name="column"
          id="column-sort"
          data-testid="column-sort"
          value={ columnSort }
          onChange={ ({ target }) => setColumnSort(target.value) }
        >
          {optionsColumns.map((option) => (
            <option key={ option.value } value={ option.value }>{option.name}</option>
          ))}
        </select>
      </label>
      <div onChange={ ({ target }) => setSort(target.value) }>
        <label htmlFor="column-sort-input-asc">
          <input
            type="radio"
            name="order"
            data-testid="column-sort-input-asc"
            id="column-sort-input-asc"
            value="ASC"
          />
          Ascendente
        </label>
        <label htmlFor="column-sort-input-desc">
          <input
            type="radio"
            name="order"
            data-testid="column-sort-input-desc"
            id="column-sort-input-desc"
            value="DESC"
          />
          Descendente
        </label>
      </div>
      <button
        data-testid="column-sort-button"
        onClick={ orderListPlanets }
      >
        ORDENAR
      </button>
    </div>
  );
}

export default OrderPlanets;
