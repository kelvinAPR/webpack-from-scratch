import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FiveHundredErrorPage from '../../pages/500';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // TODO we should log the error here with Bugsnag or LogRocket
    console.log(error, errorInfo, 'Errors here');
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <FiveHundredErrorPage />;
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired, // or PropTypes.node.isRequired to make it required
};
export default ErrorBoundary;
