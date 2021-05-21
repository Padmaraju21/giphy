import React, { useEffect} from 'react'
import {Container} from 'react-bootstrap';
import { useSelector } from 'react-redux'
import HomeScreen from './screens/homeScreen/HomeScreen';
import Login from './screens/loginScreen/Login'
import './_app.scss' 
import { Redirect, Route,Switch, useHistory} from 'react-router-dom'

const Layout =({children}) =>{
  return(
    <>
      <div className="app__container border-info">
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
      
      <Route path='/auth'>
        <Layout>
          <Login/>
        </Layout>
      </Route>

      <Route>
        <Redirect to='/'/>
      </Route>
      </Switch>
  );
}

export default App;
