'use client';

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between border-b bg-white shadow-sm">
      <div className="flex gap-4">
        <Link 
          href="/setup"
          className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          Setup
        </Link>
        <Link 
          href="/entitlements"
          className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          Entitlements
        </Link>
        <Link 
          href="/events"
          className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          Tracking Usage
        </Link>
        <Link 
          href="/components"
          className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          Components
        </Link>
      </div>
    </nav>
  );
}



