import React, { useContext, useState } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';

const optionsColumns = [
  { name: 'population', value: 'population' },
  { name: 'orbital_period', value: 'orbital_period' },
  { name: 'diameter', value: 'diameter' },
  { name: 'rotation_period', value: 'rotation_period' },
  { name: 'surface_water', value: 'surface_water' },
];

const optionComparison = [
  { name: 'maior que', value: 'maior que' },
  { name: 'menor que', value: 'menor que' },
  { name: 'igual a', value: 'igual a' },
];

function FilterNumber() {
  const { makeFilterNumber } = useContext(PlanetsContext);
  const [arrayColumn, setArrayColumn] = useState(optionsColumns);
  const [columnSelect, setColumnSelect] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueNumber, setValueNumber] = useState(0);

  const handleClick = () => {
    makeFilterNumber(column, comparison, valueNumber);
    const filterView = `${column} ${comparison} ${valueNumber}`;
    setColumnSelect([...columnSelect, filterView]);
    setArrayColumn(arrayColumn.filter(({ name }) => name !== column));
  };

  return (
    <div>
      <label htmlFor="column-filter">
        <select
          name="column"
          id="column-filter"
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target }) => setColumn(target.value) }
        >
          {arrayColumn.map((option) => (
            <option key={ option.value } value={ option.value }>{option.name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          name="comparison"
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target }) => setComparison(target.value) }
        >
          {optionComparison.map((option) => (
            <option key={ option.value } value={ option.value }>{option.name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          id="value-filter"
          name="value"
          type="number"
          value={ valueNumber }
          onChange={ ({ target }) => setValueNumber(target.value) }
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
      <div>
        {columnSelect.map((filterSelect) => (
          <div key={ filterSelect }>
            <p>{filterSelect}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterNumber;
