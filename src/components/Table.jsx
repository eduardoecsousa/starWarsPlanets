import React from 'react';
import PropTypes from 'prop-types';

function Table({ planets }) {
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

  const { results } = planets;

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {arrayTitles.map((title) => <th key={ title }>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {results.map((planet) => (
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

Table.propTypes = {
  planets: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default Table;
