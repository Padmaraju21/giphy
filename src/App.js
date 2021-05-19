import React, { useEffect, useState } from 'react'
import {Container} from 'react-bootstrap';
import './App.css';
import Header from "./components/header/Header"
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import './_app.scss'

function App() {
  return (
    //BEM NAMING COVENTION//
    <>
      <Header/>
      <div className="app__container border-info">
        <Sidebar/>
        <Container fluid className="app__main border border-warning">
          <HomeScreen/>
        </Container>
      </div>
    </>
  );
}

export default App;
