import React from 'react';
import { Bot, CheckCircle, Mail, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your AI Assistant for
              <span className="text-blue-600"> Effortless</span> Task Management
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              AutoAssist monitors your communications and automatically organizes your tasks by project. Never miss an important deadline or forget a commitment again.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Get Started Free
              </a>
              <a href="#features" className="rounded-md bg-gray-100 px-6 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-200">
                Learn More
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&w=128&h=128&q=80',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=128&h=128&q=80',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&w=128&h=128&q=80',
                  'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=facearea&w=128&h=128&q=80'
                ].map((url, i) => (
                  <img
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={url}
                    alt={`User avatar ${i + 1}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">Join 10,000+ productive professionals</span>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-xl bg-gradient-to-b from-blue-50 to-white p-8 shadow-xl">
              <div className="absolute -top-4 -left-4 bg-blue-600 rounded-lg p-3">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>Monitoring 3 email threads</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <span>Connected to 2 Slack workspaces</span>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold">Today's Priority Tasks</h3>
                  <div className="mt-3 space-y-3">
                    {[
                      "Review Q1 marketing strategy",
                      "Send client proposal",
                      "Team sync at 2 PM"
                    ].map((task, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{task}</span>
                      </div>
                    ))}
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