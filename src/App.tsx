import React, { useEffect } from 'react';
import { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ComputerAgent from './components/ComputerAgent';

function App() {
  const flags = useFlags(); // Access all feature flags

  // Log all flags and the specific flag state whenever flags update
  useEffect(() => {
    console.log('LaunchDarkly Flags:', flags);
    console.log('computerAgentEnabled flag state:', flags.computerAgentEnabled);
  }, [flags]);

  return (
    <>
      <Header />
      <main className="bg-white pt-16">
        <Hero />
        <Features />
        {flags.computerAgentEnabled && <ComputerAgent />} {/* Conditionally render based on flag */}
      </main>
    </>
  );
}

const clientSideID = import.meta.env.VITE_LAUNCHDARKLY_CLIENT_ID;

const user = {
  key: 'unique-user-key', // Ensure this key matches the targeting rules in LaunchDarkly
  name: 'John Doe',
  email: 'john.doe@example.com'
};

console.log('LaunchDarkly clientSideID:', clientSideID);

export default withLDProvider({
  clientSideID: clientSideID || '',
  user: user,
  options: {
    debug: true, // Enables verbose logging for debugging purposes
  }
})(App);