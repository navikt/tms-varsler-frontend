import { captureException } from "@nais/apm";
import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback: ReactNode;
  fingerprint: string;
}

interface State {
  hasError: boolean;
}

class ApmErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const reportedError = new Error(error.message);
    reportedError.name = `React ErrorBoundary ${error.name}`;
    reportedError.stack = errorInfo.componentStack || error.stack;

    captureException(reportedError, {
      fingerprint: this.props.fingerprint,
    });
  }

  render(): ReactNode {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

export default ApmErrorBoundary;
