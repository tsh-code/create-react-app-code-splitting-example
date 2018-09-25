import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { appLoadingItemAdd } from '../../redux/module/app/loading-item-add';
import { appLoadingItemRemove } from '../../redux/module/app/loading-item-remove';

class Component extends React.Component {

  static propTypes = {
    moduleName: PropTypes.string.isRequired,
    loader: PropTypes.func.isRequired,
    exportName: PropTypes.string,
    onLoadSuccess: PropTypes.func,
    onLoadFail: PropTypes.func,
    loadingItemAdd: PropTypes.func,
    loadingItemRemove: PropTypes.func,
  };

  static defaultProps = {
    exportName: 'default',
  };

  constructor(props) {

    super(props);

    this.state = {
      Component: null,
    };
  }

  componentDidMount() {

    const { loader } = this.props;

    this._load(loader);
  }

  render() {

    const { Component } = this.state;

    if (Component === null) {

      return null;
    }

    return React.createElement(Component);
  }

  _load = (loader) => {

    const { moduleName, loadingItemAdd } = this.props;

    loadingItemAdd(moduleName);

    loader().then(
      this._onLoadSuccess,
      this._onLoadError,
    );
  }

  _onLoadSuccess = (module) => {

    const { exportName, onLoadSuccess, moduleName, loadingItemRemove } = this.props;

    const exportedModule = module[exportName];

    if (exportedModule) {

      this.setState({
        Component: exportedModule,
      });
    }

    loadingItemRemove(moduleName);

    if (onLoadSuccess) {

      onLoadSuccess();
    }
  }

  _onLoadError = (error) => {

    const { onLoadFail, moduleName, loadingItemRemove } = this.props;

    loadingItemRemove(moduleName);

    if (onLoadFail) {

      onLoadFail();
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadingItemAdd: (name) => dispatch(appLoadingItemAdd(name)),
  loadingItemRemove: (name) => dispatch(appLoadingItemRemove(name)),
});

export const MyLoadableComponent = connect(
  undefined,
  mapDispatchToProps,
)(Component);
