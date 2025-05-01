"use client";
import React from 'react';

import { useSchematicEntitlement, useSchematicEvents } from '@schematichq/schematic-react';

export default function EventsPage() {  
  const {
    value: isFeatureEnabled,
    featureUsage,
    featureAllocation,
    featureUsageExceeded,
  } = useSchematicEntitlement("demo-event-feature");

  const { track } = useSchematicEvents();

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Events</h1>
      <p className="cardtext-gray-600 mb-8">Schematic has a fully featured event tracking system that can be used to implement many usage-based billing plans. The button below will track each time it is clicked, and we'll display the current usage and allocation to the right of the button (once configured).</p>

      <div className="card">
        <div className="flex flex-row items-center gap-4">
          <button 
            className="btn-primary"
            disabled={!isFeatureEnabled}
            onClick={() => {
              track({ event: 'demo-event-feature-clicked' });
              
              const messageDiv = document.getElementById('message');
              if (messageDiv) {
                messageDiv.style.opacity = '1';
                setTimeout(() => {
                  messageDiv.style.opacity = '0';
                }, 2000);
              }
            }}
          >
            {featureUsageExceeded ? 'No more clicks allowed!' : 'Track Clicks!'}
          </button>
          <div 
            id="message"
            className="transition-opacity duration-1000 opacity-0 text-green-600"
          >
            Clicked!
          </div>
          <div className="text-gray-700 font-mono">
            {featureUsage !== undefined && featureAllocation !== undefined 
              ? `${featureUsage} / ${featureAllocation}`
              : 'Tracking not Configured'}
          </div>
        </div>
      </div>

      <div className="card bg-gray-50">
        <p className="text-gray-700 font-medium mb-4">The code for the button above looks like:</p>
        <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
{`const {
  value: isFeatureEnabled,
  featureUsage,
  featureAllocation,
  featureUsageExceeded,
} = useSchematicEntitlement("demo-event-feature");

const { track } = useSchematicEvents();
...

<button 
  className="bg-blue-500 text-white px-4 py-2 rounded-md"
  disabled={!isFeatureEnabled}
  onClick={() => { track({ event: 'demo-event-feature-clicked' }); } }
>
  {featureUsageExceeded ? 'No more clicks allowed!' : 'Track Clicks!'}
</button>

<div>
  \{featureUsage\} / \{featureAllocation\}
</div>
`}
        </pre>
      </div>
    </div>
  );
} 