import React from 'react';

type InputAreaProps = {
  onChange: (text: string) => void;
};

const InputArea: React.FC<InputAreaProps> = ({ onChange }) => {
  return (
    <div>
      <textarea
        aria-label='data-input'
        onChange={({ target }) => onChange(target.value)}
      />
    </div>
  );
};

export default InputArea;
