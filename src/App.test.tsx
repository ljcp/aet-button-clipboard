import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import 'antd/dist/antd.css';
import { act } from 'react-dom/test-utils';

beforeEach(() => {
  jest.useFakeTimers()
});

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
});


test('renders button with initial state', () => {
  render(<App />);
  
  const buttonElement = screen.getByText(/I'm a very useful link/i);
  expect(buttonElement).toBeInTheDocument();

});

test('renders loading after button click', () => {
   render(<App />);

   fireEvent.click(screen.getByText(/I'm a very useful link/i));
   const buttonElement = screen.getByText(/Loading.../i);
   expect(buttonElement).toBeInTheDocument();
 });



test('renders success after 3 seconds', async() => {
  render(<App />);

  fireEvent.click(screen.getByText(/I'm a very useful link/i));
  const buttonElement = screen.getByText(/Loading.../i);
  expect(buttonElement).toBeInTheDocument();

  act(() => {
    jest.advanceTimersByTime(4000);
  });
  
  await waitFor(() => {
    expect(screen.getByText(/Success/i)).toBeInTheDocument();
  });

});

test('renders initial state after 6 seconds', async() => {
  render(<App />);

  fireEvent.click(screen.getByText(/I'm a very useful link/i));
  const buttonElement = screen.getByText(/Loading.../i);
  expect(buttonElement).toBeInTheDocument();

  act(() => {
    jest.advanceTimersByTime(7000);
  });

  await waitFor(() => {
    expect(screen.getByText(/I'm a very useful link/i)).toBeInTheDocument();
  });

});




