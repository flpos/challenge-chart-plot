import React from 'react';
import { DragHandleDecorator, DragHandleDiv } from './styles';

type DragHandleProps = {
  inputHeight: () => number;
  setInputHeight: (cb: (prev: number) => number) => void;
};

const DragHandle: React.FC<DragHandleProps> = ({
  setInputHeight,
  inputHeight,
}) => {
  const initDragRef = React.useRef(0);
  const initHeightRef = React.useRef(0);

  return (
    <DragHandleDiv
      draggable='true'
      onDragStart={(event) => {
        initDragRef.current = event.pageY;
        initHeightRef.current = inputHeight();
        event.dataTransfer.setDragImage(new Image(), 0, 0);
      }}
      onDrag={(event) => {
        const delta = event.pageY - initDragRef.current;
        setInputHeight((prev) => {
          const newHeight = initHeightRef.current + delta;
          if (newHeight > 400 || newHeight < 100) return prev;
          return newHeight;
        });
      }}
    >
      <DragHandleDecorator />
    </DragHandleDiv>
  );
};

export default DragHandle;
