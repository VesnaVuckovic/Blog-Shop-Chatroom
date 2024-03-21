import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import LoginPopup from './LoginPopup';

const store = configureStore({
    reducer: rootReducer
});
  
ReactDOM.render(
    <Provider store={store}>
      <LoginPopup />
    </Provider>,
    document.getElementById('root')
);