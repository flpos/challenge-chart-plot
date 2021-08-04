import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Footer from '.';

describe('Footer Component', () => {
  it('has a button, calls plotChart function', () => {
    const plotChart = jest.fn();
    render(<Footer plotChart={plotChart} />);

    const button = screen.getByText(/generate chart/i);
    expect(button).toBeInTheDocument();

    act(() => {
      button.click();
    });
    expect(plotChart).toBeCalled();
  });
});
