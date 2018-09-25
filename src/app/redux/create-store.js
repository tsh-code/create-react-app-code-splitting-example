import { applyMiddleware, compose, createStore as reduxCreateStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { isDevelopment } from '../helper/is-development';

export function createStore(initialState, history) {

  const connectedRouter = connectRouter(history);

  const reactRouterMiddleware = routerMiddleware(history);

  const middlewares = [
    reactRouterMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  if (isDevelopment()) {

    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (devTools) {
      enhancers.push(devTools());
    }
  }

  let { reducer } = require('./module/reducer');


  const store = reduxCreateStore(
    connectedRouter(reducer),
    initialState,
    compose(...enhancers),
  );

  if (isDevelopment() && module.hot) {

    module.hot.accept('./module/reducer', () => {

      let { reducer } = require('./module/reducer');

      store.replaceReducer(reducer);
    });
  }

  return store;
}
