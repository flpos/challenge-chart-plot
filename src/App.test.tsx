import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import createRange from './utils/test/createRange';

test('renders learn react link', () => {
  createRange();
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
