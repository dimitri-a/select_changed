import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import Container from './Container'

function App() {
  return (
    <Provider store={store}>
    <div>
      <Container />
    </div>
  </Provider>
  );
}

export default App;
