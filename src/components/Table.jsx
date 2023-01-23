import React, { useContext, useEffect, useState } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';

function Table() {
  const { planetsFilterScreen } = useContext(PlanetsContext);
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    setPlanets(planetsFilterScreen);
  }, [planetsFilterScreen]);
  const arrayTitles = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrian',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {arrayTitles.map((title) => <th key={ title }>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
