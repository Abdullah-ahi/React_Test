import React from 'react';
import ReactDom from 'react-dom';
import { CompRedux } from 'container/CompContainer';
import { Provider } from 'react-redux';
import { store } from './store'
ReactDom.render(
  <Provider store={store}>
    <CompRedux/>
  </Provider>,
  document.getElementById('app')
)
