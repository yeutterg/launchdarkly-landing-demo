import React from 'react';
import { Bot } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-2">
          <Bot className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">AutoAssist</span>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">
              {item}
            </a>
          ))}
        </div>
        <div>
          <a href="#" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}