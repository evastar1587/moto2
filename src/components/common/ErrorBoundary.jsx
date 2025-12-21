import React from 'react';
import { AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
          <div className="bg-moto-charcoal border-2 border-moto-red p-8 max-w-md">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-moto-red flex-shrink-0" />
              <div>
                <h2 className="text-xl font-black text-white mb-2 uppercase">Something Broke</h2>
                <p className="text-zinc-400 text-sm mb-4">
                  The app hit a problem. This is on us, not you.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-moto-red text-white font-bold text-xs uppercase hover:bg-moto-red-dark transition-all"
                >
                  Reload App
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
