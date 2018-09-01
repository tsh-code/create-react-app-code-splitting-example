import React from 'react';
import styles from './style.module.scss';

export class LandingHeroComponent extends React.Component {

  render() {

    return (
      <div className={styles.landinghero}>
        <div className={styles.landinghero_content}>
          <h2 className={styles.landinghero_title}>
            Webpack <b>Code Splitting</b> Demo
          </h2>
          <a className={styles.landinghero_authorlink} href='https://github.com/tkajtoch' ref='noopener noreferrer'>
            @tkajtoch
          </a>
        </div>
      </div>
    )
  }
}