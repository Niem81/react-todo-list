import React from 'react';
import {render} from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/store';
import { Provider } from 'react-redux';

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
    <App/>
  </Provider>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept();
}
