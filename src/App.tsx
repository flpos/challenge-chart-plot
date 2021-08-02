import React from 'react';
import { AppWrapper } from './App.styles';
import DragHandle from './components/DragHandle';
import Footer from './components/Footer';
import Header from './components/Header';
import InputArea from './components/InputArea';

function App() {
  const [inputHeight, setInputHeight] = React.useState(200);

  return (
    <AppWrapper inputAreaHeight={inputHeight}>
      <Header />
      <InputArea onChange={() => {}} />
      <DragHandle setInputHeight={setInputHeight} inputHeight={inputHeight} />
      <h1>Hello World!</h1>
      <Footer plotChart={() => {}} />
    </AppWrapper>
  );
}

export default App;
