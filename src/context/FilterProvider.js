/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import useEditListFilter from '../hooks/useEditListFilter';

export const FiltersContext = createContext();

function FilterProvider({ children }) {
  const {
    arrayColumn,
    columnSelect,
    addFilter,
    removeFilter,
    removeAll } = useEditListFilter();
  const values = useMemo(() => ({
    arrayColumn, columnSelect, addFilter, removeFilter, removeAll,
  }), [arrayColumn, columnSelect, addFilter, removeAll, removeFilter]);

  return (
    <FiltersContext.Provider value={ values }>
      {children}
    </FiltersContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default FilterProvider;
