import React from 'react';
import { Brain, Inbox, ListTodo, Zap } from 'lucide-react';

const features = [
  {
    name: 'Smart Task Extraction',
    description: 'Automatically identifies and extracts tasks from your emails, messages, and communications.',
    icon: Brain
  },
  {
    name: 'Intelligent Prioritization',
    description: 'Uses AI to understand context and prioritize tasks based on urgency and importance.',
    icon: Zap
  },
  {
    name: 'Unified Inbox',
    description: 'Consolidates tasks from multiple sources into a single, organized view.',
    icon: Inbox
  },
  {
    name: 'Project Organization',
    description: 'Automatically categorizes and groups tasks by project and context.',
    icon: ListTodo
  }
];

export default function Features() {
  return (
    <div id="features" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to stay organized
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            AutoAssist combines powerful AI with intuitive design to help you manage tasks effortlessly.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}