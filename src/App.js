import React from 'react';
import './App.css';
import SearchPlanets from './pages/SearchPlanets';
import PlanetsProvider from './context/PlanetsProvider';
import FilterProvider from './context/FilterProvider';

function App() {
  return (
    <div>
      <PlanetsProvider>
        <FilterProvider>
          <SearchPlanets />
        </FilterProvider>
      </PlanetsProvider>
      ,
    </div>
  );
}

export default App;
