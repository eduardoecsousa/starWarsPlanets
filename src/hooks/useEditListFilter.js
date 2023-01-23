import { useState } from 'react';

export const optionsColumns = [
  { name: 'population', value: 'population' },
  { name: 'orbital_period', value: 'orbital_period' },
  { name: 'diameter', value: 'diameter' },
  { name: 'rotation_period', value: 'rotation_period' },
  { name: 'surface_water', value: 'surface_water' },
];

function useEditListFilter() {
  const [arrayColumn, setArrayColumn] = useState(optionsColumns);
  const [columnSelect, setColumnSelect] = useState([]);

  const addFilter = (filter) => {
    setColumnSelect([...columnSelect, filter]);
    setArrayColumn(arrayColumn.filter((option) => option.name !== filter.column));
  };

  const removeFilter = (filter) => {
    const objOpition = optionsColumns.find((option) => option.name === filter.column);
    setArrayColumn([...arrayColumn, objOpition]);
    setColumnSelect(columnSelect.filter((selected) => selected.column !== filter.column));
  };

  const removeAll = () => {
    setArrayColumn(optionsColumns);
    setColumnSelect([]);
  };

  return {
    arrayColumn,
    columnSelect,
    addFilter,
    removeFilter,
    removeAll,
  };
}

export default useEditListFilter;
