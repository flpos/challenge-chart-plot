import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '.';

describe('Header component', () => {
  it('renders "Felipe\'s Challenge"', () => {
    render(<Header />);
    const header = screen.getByText(/felipe's challenge/i);
    expect(header).toBeInTheDocument();
  });
});
