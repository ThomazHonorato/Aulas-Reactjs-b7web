/*Todo elemento é um componente no react.
  O próprio sistema é um grande componente.
*/
import React from 'react';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

function App(){

  return (
    <BrowserRouter>
      <div className="Container">
      <h1>Meu Site Legal</h1><br/>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
      <hr/>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/about'>
        <About/>  
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
    </Switch>
    <hr/>
      <h4>All Rights Reserved</h4>
    </div>
    </BrowserRouter>
  );
}

export default App;