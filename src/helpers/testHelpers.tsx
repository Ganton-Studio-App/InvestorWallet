import React from 'react';
// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../../redux/reducers/counter';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import reducers from '../redux/reducers';
export function renderWithRedux(renderedComponent) {
  const initialState = {};
  const middleware = [thunk];
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  return render(<Provider store={store}>{renderedComponent}</Provider>);
}
