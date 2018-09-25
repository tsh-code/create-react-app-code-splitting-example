import React from 'react';
import { AppHeaderComponent } from './header/component';
import { AppLoaderBarComponent } from './loader-bar/component';
import styles from './style.module.scss';

export class AppComponent extends React.Component {

  render() {

    const { children } = this.props;

    return (
      <div className={styles.app}>
        <AppHeaderComponent />
        <AppLoaderBarComponent />
        {children}
      </div>
    );
  }
}
