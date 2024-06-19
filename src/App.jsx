import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/login-signup/Main';
import Homepage from './components/Homepage/Homepage';
import MainPage from '../src/components/mainPage/MainPage'

import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header></Header>
      <MainPage></MainPage>
    </>
  );
}

export default App;
