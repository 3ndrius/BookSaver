import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../redux/reducers';
import {ToastContainer} from 'react-toastify'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "../components/themes/GlobalStyle";
import { theme } from "../components/themes/mainTheme";

const sagaMiddleware = createSagaMiddleware();

function render(
  ui,
  {
    initialState = {},
    store = createStore(
      rootReducer,
      compose(
        applyMiddleware(sagaMiddleware),
      ),
    ),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    sagaMiddleware.run(rootSaga);
    return <Provider store={store}><ThemeProvider theme={theme}><ToastContainer />{children}</ThemeProvider></Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper,  ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render as customRender }