import React from 'react';
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk';
import { Monitor, Terminal, Globe, Database } from 'lucide-react';

export default function ComputerAgent() {
  const { computerAgentEnabled } = useFlags();
  const ldClient = useLDClient();
  const isDevelopment = import.meta.env.DEV;
  
  // Show component in development or when flag is enabled
  const showComponent = isDevelopment || (ldClient && computerAgentEnabled);
  
  if (!showComponent) return null;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Introducing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Computer-Using Agent
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the next level of automation with our AI agent that can interact with your computer just like a human would.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="relative">
            <div className="rounded-2xl bg-gray-900 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white">Watch the magic happen</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Globe, text: "Performs web research and data gathering" },
                      { icon: Terminal, text: "Executes SOPs and repetitive tasks" },
                      { icon: Database, text: "Handles data entry across applications" },
                      { icon: Monitor, text: "Works with any desktop application" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-300">
                        <item.icon className="h-5 w-5 text-blue-400" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-lg overflow-hidden bg-gray-800 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="font-mono text-sm text-green-400">
                      <p>$ Executing task: Draft quarterly report</p>
                      <p className="opacity-75">→ Opening spreadsheet application...</p>
                      <p className="opacity-75">→ Analyzing Q3 data...</p>
                      <p className="opacity-75">→ Generating summary...</p>
                      <p className="text-blue-400">✓ Task completed successfully</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}