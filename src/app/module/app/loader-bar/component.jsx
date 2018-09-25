import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import styles from './style.module.scss';

class Component extends React.Component {

  /**
   * @inheritDoc
   */
  render() {

    const { showLoader } = this.props;

    return <div className={classNames(
      styles.apploaderbar,
      { [styles['apploaderbar--visible']]: showLoader },
    )} />
  }
}

const mapStateToProps = (state) => ({
  showLoader: state.app.loadingItems.length > 0,
});

export const AppLoaderBarComponent = connect(
  mapStateToProps,
)(Component);
