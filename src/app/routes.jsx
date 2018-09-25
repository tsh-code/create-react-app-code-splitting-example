import React from 'react';
import Loadable from 'react-loadable';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MyLoadableComponent } from './component/my-loadable/component';

const LoadingComponent = (props) => {

  if (props.error || props.timedOut) {

    return <span>Wystąpił błąd podczas ładowania danych</span>
  } else if (props.pastDelay) {

    return <span>Wczytywanie...</span>
  }

  return null;
}

const ReactLoadableLandingComponent = Loadable({
  loader: () => import(/* webpackChunkName: "landing" */'./module/landing/component'),
  loading: LoadingComponent,
  render: ({ LandingComponent }, props) => (
    <LandingComponent {...props} />
  ),
});

const ReactLoadableManagerComponent = Loadable({
  loader: () => import(/* webpackChunkName: "manager" */'./module/manager/component'),
  loading: LoadingComponent,
  render: ({ ManagerComponent }, props) => (
    <ManagerComponent {...props} />
  ),
});

export function getRoutes() {
  return (
    <Switch>
      <Redirect from='/' exact to='/my-loadable/landing' />
      <Route path='/react-loadable/landing' component={ReactLoadableLandingComponent} />
      <Route path='/react-loadable/manager' component={ReactLoadableManagerComponent} />
      <Route path='/my-loadable/landing' component={() => (
        <MyLoadableComponent
          loader={() => import(/* webpackChunkName: "landing" */'./module/landing/component')}
          exportName='LandingComponent'
          moduleName='LandingComponent'
        />
      )} />
      <Route path='/my-loadable/manager' component={() => (
        <MyLoadableComponent
          loader={() => import(/* webpackChunkName: "manager" */'./module/manager/component')}
          exportName='ManagerComponent'
          moduleName='ManagerComponent'
        />
      )} />
      <Route path='/my-loadable/preloading-example' component={() => (
        <MyLoadableComponent
          loader={() => import(/* webpackChunkName: "preloading-example" */'./module/preloading-example/component')}
          exportName='PreloadingExampleComponent'
          moduleName='PreloadingExampleComponent'
        />
      )} />
    </Switch>
  )
}
