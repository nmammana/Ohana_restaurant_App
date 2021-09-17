import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import './styles/Global.scss';
import './styles/Reset.scss';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path= "/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

