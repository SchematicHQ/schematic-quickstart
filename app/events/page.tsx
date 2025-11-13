"use client";
import React from 'react';

import { 
  useSchematicEntitlement, 
  useSchematicEvents 
} from '@schematichq/schematic-react';

export default function EventsPage() {  
  const {
    value: isDemoFeatureEnabled,
    featureUsage: demoFeatureUsage,
    featureAllocation: demoFeatureAllocation,
    featureUsageExceeded: demoFeatureUsageExceeded,
  } = useSchematicEntitlement("demo-event-feature");

  const {
    value: isNewFeatureEnabled,
    featureUsage: newFeatureUsage,
    featureAllocation: newFeatureAllocation,
    featureUsageExceeded: newFeatureUsageExceeded,
  } = useSchematicEntitlement("new-event-feature");


  const { track } = useSchematicEvents();

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h1>Tracking Usage</h1>
      <p className="mb-8">
        Schematic has a fully featured event tracking system that can be used to implement many usage-based billing plans. The button below will track each time it is clicked, and we'll display the current usage and allocation to the right of the button (once configured)
      </p>
      
      <div className="card space-y-8">
        <div className="flex flex-row items-center gap-4">
          <button 
            className="btn-primary"
            disabled={!isDemoFeatureEnabled}
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
            {demoFeatureUsageExceeded ? 'No more clicks allowed!' : 'Track Clicks!'}
          </button>
          <div 
            id="message"
            className="transition-opacity duration-1000 opacity-0 text-green-600"
          >
            Clicked!
          </div>
          <div className="text-gray-700 font-mono">
            {demoFeatureUsage !== undefined && demoFeatureAllocation !== undefined 
              ? `${demoFeatureUsage} / ${demoFeatureAllocation}`
              : 'Tracking not Configured'}
          </div>
        </div>

        <div className="flex flex-row items-center gap-4">
          <button 
            className="btn-primary"
            disabled={!isNewFeatureEnabled}
            onClick={() => {
              track({ event: 'new-event-feature-clicked' });
              
              const messageDiv = document.getElementById('message2');
              if (messageDiv) {
                messageDiv.style.opacity = '1';
                setTimeout(() => {
                  messageDiv.style.opacity = '0';
                }, 2000);
              }
            }}
          >
            {newFeatureUsageExceeded ? 'No more clicks allowed!' : 'Track Clicks!'}
          </button>
          <div 
            id="message2"
            className="transition-opacity duration-1000 opacity-0 text-green-600"
          >
            Clicked!
          </div>
          <div className="text-gray-700 font-mono">
            {newFeatureUsage !== undefined && newFeatureAllocation !== undefined 
              ? `${newFeatureUsage} / ${newFeatureAllocation}`
              : 'Tracking not Configured'}
          </div>
        </div>
      </div>

      <div>
        <h3>Usage</h3>
        <p>
          Simple Entitlements are the most common way to control access to features. Anytime some plans have access to a feature, whereas other plans do not, a simple entitlement is the best way to control this. 
        </p>
        <br />
        <p>Common Examples include SSO, custom domains, and access to specific AI models.</p>
      </div>

      <div>
        <h3>Enabling the second button</h3>
        <p>
          We can easily add an entitlement so that the second button is clickable as well. A quick walkthrough (with a video) can be found <a href="https://docs.schematichq.com/quickstart/tracking-usage" target="_blank">in our docs</a>.
        </p>
      </div>

      <div className="card bg-gray-50">
        <h3>The code for the button above looks like:</h3>
        <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
{`const {
  value: isFeatureEnabled,
  featureUsage,
  featureAllocation,
  featureUsageExceeded,
} = useSchematicEntitlement("demo-event-feature");

const { track } = useSchematicEvents();

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