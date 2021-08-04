import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: lightgray;
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  text-transform: uppercase;
  color: white;
  background-color: dodgerblue;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;

  transition: all 0.2s;

  &:hover {
    background-color: #14f;
  }
`;
