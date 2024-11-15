import React, { useEffect } from 'react';
import { withLDProvider, useFlags, useLDClient } from 'launchdarkly-react-client-sdk';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ComputerAgent from './components/ComputerAgent';

const clientSideID = import.meta.env.VITE_LAUNCHDARKLY_CLIENT_ID;

// Context attributes for LaunchDarkly
const context = {
  kind: 'user',
  key: '1234567890', 
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  device: 'mac',
  country: 'DE'
};

function App() {
  const flags = useFlags(); // Access all feature flags
  const client = useLDClient(); // Get the LaunchDarkly client instance

  useEffect(() => {
    if (client) { // Ensure the client is available
      console.log('LaunchDarkly Flags:', flags);
      console.log('computerAgentEnabled flag state:', flags.computerAgentEnabled);
      
      // Track an event on page load
      client.track('page_load', { page: 'App' }); // Track the page load event
    }
  }, [flags, client]);

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

export default withLDProvider({
  clientSideID: clientSideID || '',
  context: context,
  options: {
    sendEvents: true, // Ensure events are sent
    allAttributesPrivate: false,
    privateAttributes: []
  }
})(App);