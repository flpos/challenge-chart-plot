import styled from 'styled-components';

type AppWrapperProps = {
  inputAreaHeight?: number;
};

const getInputHeight = ({ inputAreaHeight = 200 }: AppWrapperProps) => {
  return `${inputAreaHeight}px`;
};

export const AppWrapper = styled.div<AppWrapperProps>`
  display: grid;
  grid-template-rows: 64px ${getInputHeight} 4px auto 64px;

  height: 100vh;
`;
