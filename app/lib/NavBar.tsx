'use client';

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full p-4 flex justify-between border-b">
      <div className="flex gap-4">
        <Link 
          href="/setup"
          className="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100"
        >
          Setup
        </Link>
        <Link 
          href="/entitlements"
          className="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100"
        >
          Entitlements
        </Link>
        <Link 
          href="/events"
          className="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100"
        >
          Events
        </Link>
      </div>
    </nav>
  );
}



