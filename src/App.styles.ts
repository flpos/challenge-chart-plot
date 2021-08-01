import styled from 'styled-components';

type AppWrapperProps = {
  inputAreaHeight?: number;
};
export const AppWrapper = styled.div<AppWrapperProps>`
  display: grid;
  grid-template-rows: 64px 1fr auto 64px;
  grid-template-areas: 'header', 'input', 'plot', 'footer';

  height: 100vh;
`;
