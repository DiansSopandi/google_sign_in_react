import React from 'react';
// import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { signin,signout } from './actions/auth';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
// const initialState = { firstName:'', lastName:'', email:'', password:'', confirmPassword:'' };

function App() {
  // const history = useHistory();
  // const dispatch = useDispatch();

  // useEffect(
  //   ()=>{
  //         dispatch( signin( initialState, history) );
  //       },
  //   [dispatch]
  // );

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/auth" exact component={ Auth } />          
        </Switch>
        
      </Container>
    </BrowserRouter>
  );
}

export default App;
