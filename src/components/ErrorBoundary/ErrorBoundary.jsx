import React, { Component } from 'react';
import GeneralErrorPage from './GeneralErrorPage'; // This is your general error page

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render any custom fallback UI
      return <GeneralErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
