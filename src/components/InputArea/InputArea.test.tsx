import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import InputArea from '.';

describe('InputArea component', () => {
  it('calls onChange on change', () => {
    const onChange = jest.fn();

    render(<InputArea onChange={onChange} />);
    const inputArea = screen.getByLabelText('data-input');

    act(() => {
      fireEvent.change(inputArea, { target: { value: 'test' } });
    });

    expect(onChange).toBeCalledWith('test');
  });
});
