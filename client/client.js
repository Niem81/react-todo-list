import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, IndexRedirect, IndexRoute, hashHistory} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

// import App from '../components/App';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import AdviceList from '../components/AdviceList';

import configureStore from '../store';

let initialState = {
  advices: [{
    id: 0,
    completed: false,
    text: 'Ingresa tus consejos - Y siempre pide la receta secreta!',
    shared: false
  }],
  user: {
    username: 'marcus',
    id: 13
  }
}

let store = configureStore(initialState)

render (
  <Provider store={store}>
    <BrowserRouter history={hashHistory}>
      <Route path="/" component={Dashboard}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept();
}
