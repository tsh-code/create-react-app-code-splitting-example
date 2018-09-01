import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import { AppComponent } from './module/app/component';

const appRootElement = document.getElementById('root');

const LoadingComponent = (props) => {

  if (props.error || props.timedOut) {

    return <span>Wystąpił błąd podczas ładowania danych</span>
  } else if (props.pastDelay) {

    return <span>Wczytywanie...</span>
  }

  return null;
}

const LandingLoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "landing" */'./module/landing/component'),
  loading: LoadingComponent,
  render: ({ LandingComponent }, props) => (
    <LandingComponent {...props} />
  ),
});

const ManagerLoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "manager" */'./module/manager/component'),
  loading: LoadingComponent,
  render: ({ ManagerComponent }, props) => (
    <ManagerComponent {...props} />
  ),
});

function getRootComponent() {

  return (
    <BrowserRouter>
      <AppComponent>
        <Switch>
          <Redirect from='/' exact to='/landing' />
          <Route path='/landing' component={LandingLoadableComponent} />
          <Route path='/manager' component={ManagerLoadableComponent} />
        </Switch>
      </AppComponent>
    </BrowserRouter>
  )
}

ReactDOM.render(
  getRootComponent(),
  appRootElement,
);
