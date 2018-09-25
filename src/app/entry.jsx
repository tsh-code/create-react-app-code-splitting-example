import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { AppComponent } from './module/app/component';
import { createStore } from './redux/create-store';
import { getRoutes } from './routes';

const appRootElement = document.getElementById('root');

const history = createBrowserHistory();

const store = createStore(undefined, history);

const routes = getRoutes();

function getRootComponent(children) {

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppComponent>
          {children}
        </AppComponent>
      </ConnectedRouter>
    </Provider>
  )
}

ReactDOM.render(
  getRootComponent(routes),
  appRootElement,
);
