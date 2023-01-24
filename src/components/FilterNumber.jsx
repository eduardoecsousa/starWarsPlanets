import React, { useContext, useState } from 'react';
import { FiltersContext } from '../context/FilterProvider';
import { PlanetsContext } from '../context/PlanetsProvider';
import imageDelete from '../img/delete-xxl.png';

const optionComparison = [
  { name: 'maior que', value: 'maior que' },
  { name: 'menor que', value: 'menor que' },
  { name: 'igual a', value: 'igual a' },
];

function FilterNumber() {
  const { makeFilter,
    allPlanets } = useContext(PlanetsContext);
  const {
    arrayColumn, columnSelect, addFilter, removeFilter, removeAll,
  } = useContext(FiltersContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueNumber, setValueNumber] = useState(0);
  const [filters, setFilters] = useState([]);

  const handleClick = () => {
    const filterView = { column, comparison, valueNumber };
    setFilters([...filters, filterView]);
    makeFilter('', allPlanets, [...filters, filterView]);
    addFilter(filterView);
    setColumn('population');
    setComparison('maior que');
    setValueNumber(0);
  };

  const deleteFilter = (eleDelete) => {
    setFilters(filters.filter((e) => e.column !== eleDelete.column));
    makeFilter('', allPlanets, filters.filter((e) => e.column !== eleDelete.column));
    removeFilter(eleDelete);
  };

  const deleteAll = () => {
    removeAll();
    makeFilter('', allPlanets, []);
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
        {columnSelect.map((select) => (
          <div key={ select.column } data-testid="filter">
            <p>{`${select.column} ${select.comparison} ${select.valueNumber}`}</p>
            <button
              type="button"
              onClick={ () => deleteFilter(select) }
              data-testid="delete-one-filter"
            >
              <img src={ imageDelete } alt="icone-delete" className="icon-delete" />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={ deleteAll }
        data-testid="button-remove-filters"
      >
        REMOVER FILTRO
      </button>
    </div>
  );
}

export default FilterNumber;
