import React from 'react';
import { AppWrapper } from './App.styles';
import Footer from './components/Footer';
import Header from './components/Header';
import InputArea from './components/InputArea';

function App() {
  return (
    <AppWrapper>
      <Header />
      <InputArea onChange={() => {}} />
      <h1>Hello World!</h1>
      <Footer plotChart={() => {}} />
    </AppWrapper>
  );
}

export default App;
