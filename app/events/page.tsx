"use client";
import React from 'react';

import { useSchematicEntitlement, useSchematicEvents } from '@schematichq/schematic-react';

export default function EventsPage() {  
  const {
    value: isFeatureEnabled,
    featureUsage,
    featureAllocation,
  } = useSchematicEntitlement("demo-event-feature");

  const { track } = useSchematicEvents();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Entitlements</h1>
      <p>Schematic has a fully featured event tracking system that can be used to implement many usage-based billing plans. The button below will track each time it is clicked, and we'll display the current usage and allocation to the right of the button (once configured).</p>

      <div className="flex flex-row items-center gap-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          disabled={!isFeatureEnabled}
          onClick={() => {
            track({ event: 'demo-event-feature-clicked' });
          }}
        >
          Track Clicks!
        </button>
        <div>
          {featureUsage !== undefined && featureAllocation !== undefined 
            ? `${featureUsage} / ${featureAllocation}`
            : 'Tracking not Configured'}
        </div>
      </div>

      <p>The code for the button above looks like:</p>
      <pre>
{`
const {
  value: isFeatureEnabled,
  featureUsage,
  featureAllocation,
} = useSchematicEntitlement("demo-event-feature");

const { track } = useSchematicEvents();
...

<button 
  className="bg-blue-500 text-white px-4 py-2 rounded-md"
  disabled={!isFeatureEnabled}
  onClick={() => { track({ event: 'demo-event-feature-clicked' }); } }
>
  Track Clicks!
</button>

<div>
  \{featureUsage\} / \{featureAllocation\}
</div>
`}
      </pre>
    </div>
  );
} 