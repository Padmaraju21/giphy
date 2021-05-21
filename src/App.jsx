import React, { useEffect, useState } from 'react'
import {Container} from 'react-bootstrap';
import './App.css';
import Header from "./components/header/Header"
import Sidebar from './components/sidebar/Sidebar';
import { useSelector } from 'react-redux'
import HomeScreen from './screens/homeScreen/HomeScreen';
import Login from './screens/loginScreen/Login'
import './_app.scss' 
import { Redirect, Route,Switch, useHistory} from 'react-router-dom'

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
    const { accessToken, loading } = useSelector(state => state.auth)
 
    const history = useHistory()
 
    useEffect(() => {
       if (!loading && !accessToken) {
          history.push('/auth')
       }
    }, [accessToken, loading, history])
  return (
    //BEM NAMING COVENTION//
      <Switch>
      <Route path='/' exact>
        <Layout>
          <HomeScreen/>
        </Layout>
      </Route>
      
      {/* <Route path='/auth'>
        <Layout>
          <Login/>
        </Layout>
      </Route> */}

      <Route>
        <Redirect to='/'/>
      </Route>
      </Switch>
  );
}

export default App;
