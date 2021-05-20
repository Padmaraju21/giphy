import React, {useState } from 'react'
import {Container} from 'react-bootstrap';
import './App.css';
import Header from "./components/header/Header"
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import Login from './screens/loginScreen/Login'
import './_app.scss'
import {BrowserRouter as Router, Redirect, Route,Switch} from 'react-router-dom'

const Layout =({children}) =>{
  //for toggling the side bar in a smaller screen
  const [sidebar,toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return(
    <>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className="app__container border-info">
        <Sidebar sidebar={sidebar} 
        handleToggleSidebar={handleToggleSidebar}
        />
        <Container fluid className="app__main border border-warning">
        {children}
        </Container>
      </div>
    </> 
  )
}

function App() {
  
  return (
    //BEM NAMING COVENTION//
    <Router>
      <Switch>
      <Route path='/' exact>
        <Layout>
          <HomeScreen/>
        </Layout>
      </Route>
      
      <Route path='/auth'>
        <Layout>
          <Login/>
        </Layout>
      </Route>

      <Route path='/search'>
        <Layout>
          <h1>Search Results</h1>
        </Layout>
      </Route>

      <Route>
        <Redirect to='/'/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
