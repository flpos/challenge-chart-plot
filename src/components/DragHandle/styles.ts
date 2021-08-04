import styled from 'styled-components';

export const DragHandleDiv = styled.div`
  cursor: grab;
  background-color: darkblue;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 2px, 0px -2px;
  }
`;

export const DragHandleDecorator = styled.div`
  width: 20px;
  height: 12px;
  background-color: blue;
  margin: 0 auto;

  transform: translate(0, -4px);
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  ::before,
  ::after {
    content: '';
    background-color: #38f;
    width: 14px;
    height: 2px;
  }
`;
