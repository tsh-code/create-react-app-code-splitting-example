import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

export class AppHeaderComponent extends React.Component {

  render() {

    return (
      <header className={styles.appheader}>
        <h1 className={styles.appheader_title}>
          Webpack Code Splitting Demo
        </h1>
        <nav className={styles.appheader_nav}>
          <ul className={styles.appheader_menu}>
            <li className={styles.appheader_menuitem}>
              <Link to='/landing' className={styles.appheader_menulink}>
                About
              </Link>
            </li>
            <li className={styles.appheader_menuitem}>
              <Link to='/manager' className={styles.appheader_menulink}>
                Manager
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
