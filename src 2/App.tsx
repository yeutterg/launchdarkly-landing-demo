import React from 'react';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ComputerAgent from './components/ComputerAgent';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <>
      <Header />
      <main className="bg-white pt-16">
        <Hero />
        <Features />
        <ErrorBoundary>
          <ComputerAgent />
        </ErrorBoundary>
      </main>
    </>
  );
}

export default withLDProvider({
  clientSideID: '6733e6d76b95d8085cc983b8',
  options: {
    bootstrap: 'localStorage'
  }
})(App);