import React from "react";

interface Props {
  children: React.ReactNode;
}

interface ErrorState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, ErrorState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(): ErrorState {
    return {
      hasError: true
    };
  }

  componentDidCatch(error: Error) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
