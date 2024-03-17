import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  error: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  // console.error('Uncaught error:', error, errorInfo);
  // }

  render() {
    if (this.state.error) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
