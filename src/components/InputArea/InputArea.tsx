import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import React from 'react';
import styled from 'styled-components';

type InputAreaProps = {
  value?: string;
  onChange: (text: string) => void;
};

const Wrapper = styled.div`
  .CodeMirror {
    border-radius: 0px;
  }
`;

const InputArea: React.FC<InputAreaProps> = ({ value, onChange }) => {
  return (
    <Wrapper>
      <CodeMirror
        options={{
          theme: 'monokai',
          mode: 'js',
          screenReaderLabel: 'data-input',
        }}
        value={value}
        onChange={(instance) => {
          onChange(instance.getValue());
        }}
      />
    </Wrapper>
  );
};

export default InputArea;
