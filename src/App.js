/*Todo elemento é um componente no react.
  O próprio sistema é um grande componente.
*/
import React, { useState} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './App.css';
//import styled from 'styled-components';
//import Modal from './components/Modal';
import Home from './pages/home';
import About from './pages/about';
import Categories from './pages/categories';

function App(){

/*
  Funcionamento do modal simples
  const [modalVisible, setModalVisible] = useState(false);

const handleButtonClick = () =>{
    setModalVisible(true);
}

*/

  return (
    <BrowserRouter>
      <header><h1>Meu site legal</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/categories/sport">Sport</Link></li>
            <li><Link to="/categories/economy">Economy</Link></li>
            <li><Link to="/categories/world">World</Link></li>
          </ul>
        </nav>
      </header>
      <hr/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/categories'>
          <Categories/>
        </Route>
      </Switch>
      <hr/>
      <footer>
        All rights reserved...
      </footer>
    </BrowserRouter>










    /* Exemplo de Rotas simples

    <BrowserRouter>
      <header><h1>Meu site legal</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>
          </ul>
        </nav>
      </header>
      <hr/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
      </Switch>
      <hr/>
      <footer>
        All rights reserved...
      </footer>
    </BrowserRouter>
  */

    /*Código para modal simples
     <>
            <button onClick={handleButtonClick}>Open Modal</button>
            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <h1>Testando... 123</h1>
            </Modal>
        
    </>
    */
  );
}

export default App;