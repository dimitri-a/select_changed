import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";


import Container from './Container'

function App() {
  return (
    <Provider store={store}>
    <div style={{ padding: 15 }}>

      {/* <FormContainer onSubmit={showResults} /> */}

      <Container />
    </div>
  </Provider>
  );
}

export default App;
