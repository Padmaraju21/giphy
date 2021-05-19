
import { Container } from '@material-ui/core';
import './App.css';
import Header from "./components/header/Header"
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    //BEM NAMING COVENTION
    <div className="app">
    {/* <h1>Gify Explorer</h1>  */}
    <Header/>
    <div className="app_container"></div>
    {/*Header*/}   
    <Sidebar/> 
    <Container fluid className="app__main">
      <HomeScreen/>
      </Container> 
    {/*Trending*/}      
    </div>
  );
}

export default App;
