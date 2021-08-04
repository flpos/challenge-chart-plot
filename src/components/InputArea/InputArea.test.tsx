import { render } from '@testing-library/react';
import InputArea from '.';
import createRange from '../../utils/test/createRange';

describe('InputArea component', () => {
  it('calls onChange on change', () => {
    createRange();
    const onChange = jest.fn();

    // changed fireEvent to value passing
    // because codemirror does not handles changing
    // the textarea well.
    render(<InputArea value='test' onChange={onChange} />);

    expect(onChange).toBeCalledWith('test');
  });
});
