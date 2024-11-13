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

const isDevelopment = import.meta.env.DEV;
const clientSideID = import.meta.env.VITE_LAUNCHDARKLY_CLIENT_ID;

export default withLDProvider({
  clientSideID: clientSideID || (isDevelopment ? 'dev-client-id' : ''),
  options: {
    bootstrap: isDevelopment ? {
      computerAgentEnabled: true
    } : undefined
  }
})(App);