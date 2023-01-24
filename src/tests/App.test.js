import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import { result } from './mock';
import userEvent from '@testing-library/user-event';

describe('Testando a aplicação Star Wars Search Planets', () => {
  test('Verifica se é feito a requisição da API e é renderizado as informações', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
      ok: true,
      json: jest.fn().mockResolvedValue(result)
  });
    render(<App />)
    
    const Loading = screen.getByTestId('loading');

    await waitFor(() => waitForElementToBeRemoved(Loading), {timeout: 3000}); 

    const filterText = screen.getByTestId('name-filter');
    const columnFilter = screen.getByTestId('column-filter');
    const comparison = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonfilter = screen.getByTestId('button-filter');
    const removeAllFilters = screen.getByTestId('button-remove-filters'); 

    expect(filterText).toBeInTheDocument();
    expect(columnFilter).toBeInTheDocument();
    expect(comparison).toBeInTheDocument();
    expect(valueFilter).toBeInTheDocument();
    expect(buttonfilter).toBeInTheDocument();
    expect(removeAllFilters).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledWith('https://swapi.dev/api/planets')

    const allColumnTable = screen.getAllByRole('columnheader')

    allColumnTable.forEach((itemColumn) => expect(itemColumn).toBeInTheDocument());

    await waitFor(() => expect(screen.getAllByTestId('planet-name')).toHaveLength(10));
  })
  test('Verifica o filtro de texto da aplicação', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
      ok: true,
      json: jest.fn().mockResolvedValue(result)
  });
    render(<App />)
    const Loading = screen.getByTestId('loading');

    await waitFor(() => waitForElementToBeRemoved(Loading), {timeout: 3000}); 
    const filterText = screen.getByTestId('name-filter');
    await waitFor(() => expect(screen.getAllByTestId('planet-name')).toHaveLength(10));
    userEvent.type(filterText, 'Tatooine')
    await waitFor(() => expect(screen.getAllByTestId('planet-name')).toHaveLength(1));
  })
  test('Verifica o filtro de valores numericos', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
      ok: true,
      json: jest.fn().mockResolvedValue(result)
    });
    render(<App />)
    const Loading = screen.getByTestId('loading');

    await waitFor(() => waitForElementToBeRemoved(Loading), {timeout: 3000}); 
   
    await waitFor(() => expect(screen.getAllByTestId('planet-name')).toHaveLength(10));

    const buttonfilter = screen.getByTestId('button-filter');
    
    userEvent.click(buttonfilter);

    await waitFor(() => expect(screen.getAllByTestId('planet-name')).toHaveLength(8));

    const buttonDeleteFilter = screen.getByTestId('delete-one-filter');

    userEvent.click(buttonDeleteFilter);

    await waitFor(() => expect(screen.getAllByTestId('planet-name')).toHaveLength(10));

    const removeAllFilters = screen.getByTestId('button-remove-filters'); 

    userEvent.click(removeAllFilters);
  })

  test('Verifica o filtro de valores numericos', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
      ok: true,
      json: jest.fn().mockResolvedValue(result)
    });
    render(<App />)
    const Loading = screen.getByTestId('loading');

    await waitFor(() => waitForElementToBeRemoved(Loading), {timeout: 3000}); 
   
    await waitFor(() => expect(screen.getAllByTestId('planet-name')).toHaveLength(10));

    const acendente = screen.getByRole('radio', {name: /Ascendente/i})

    const buttonOrdenar = screen.getByRole('button', {
      name: /ordenar/i
    });

    userEvent.click(acendente);

    userEvent.click(buttonOrdenar);

    const expectedPlanets = ['Yavin IV', 'Tatooine', 'Bespin', 'Endor', 'Kamino', 'Alderaan', 'Naboo', 'Coruscant'];
    const allPlanets = screen.getAllByTestId('planet-name');

    expectedPlanets.forEach((planet, index) => expect(allPlanets[index]).toHaveTextContent(planet) )

  });
});