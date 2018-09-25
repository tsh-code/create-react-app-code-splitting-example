import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './style.module.scss';

class Component extends React.Component {

  /**
   * @inheritDoc
   */
  render() {

    return (
      <header className={styles.appheader}>
        <h1 className={styles.appheader_title}>
          Code splitting demo
        </h1>
        <nav className={styles.appheader_nav}>
          <ul className={styles.appheader_menu}>
            <li className={styles.appheader_menuitem}>
              <Link to='/react-loadable/landing' className={styles.appheader_menulink}>
                About (RL)
              </Link>
            </li>
            <li className={styles.appheader_menuitem}>
              <Link to='/react-loadable/manager' className={styles.appheader_menulink}>
                Manager (RL)
              </Link>
            </li>
            <li className={styles.appheader_menuitem}>
              <Link to='/my-loadable/landing' className={styles.appheader_menulink}>
                About (ML)
              </Link>
            </li>
            <li className={styles.appheader_menuitem}>
              <Link to='/my-loadable/manager' className={styles.appheader_menulink}>
                Manager (ML)
              </Link>
            </li>
            <li className={styles.appheader_menuitem} onMouseOver={this._onMouseOverPreloadingExampleLink}>
              <Link to='/my-loadable/preloading-example' className={styles.appheader_menulink}>
                Preloading on hover (ML)
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }

  _onMouseOverPreloadingExampleLink = () => {

    console.info('Begin loading chunk...');

    import(/* webpackChunkName: "preloading-example" */'../../preloading-example/component').then(() => {

      console.info('Chunk loaded');
    });
  }
}

export const AppHeaderComponent = withRouter(Component);
