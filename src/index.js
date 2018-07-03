import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './App'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import '../semantic/dist/semantic.min.css';

const store = configureStore();
console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)