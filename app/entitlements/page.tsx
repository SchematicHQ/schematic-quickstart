"use client";
import { useSchematicEntitlement, useSchematicIsPending } from '@schematichq/schematic-react';

export default function EntitlementsPage() {
  const {
    value: isDemoOnFeatureEnabled,
  } = useSchematicEntitlement("demo-on-feature");

  const {
    value: isDemoOffFeatureEnabled,
  } = useSchematicEntitlement("demo-off-feature");

  console.log("isDemoOnFeatureEnabled", isDemoOnFeatureEnabled);
  console.log("isDemoOffFeatureEnabled", isDemoOffFeatureEnabled);

  const isPending = useSchematicIsPending();

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Entitlements</h1>
      <p className="card text-gray-600 mb-8">Entitlements is a fancy word for "the company plan allows them to do this". In Schematic, features are <em>entitled</em> to plans. This first feature (button) is entitled to your plan. The second feature (button) is not.</p>

      <div className="card space-y-8">
        <div className="flex flex-row items-center gap-4">
          <button 
            className="btn-primary"
            disabled={!isDemoOnFeatureEnabled}
            onClick={() => {
              const messageDiv = document.getElementById('message');
              if (messageDiv) {
                messageDiv.style.opacity = '1';
                setTimeout(() => {
                  messageDiv.style.opacity = '0';
                }, 2000);
              }
            }}
          >
            I'm entitled!
          </button>
          <div 
            id="message"
            className="transition-opacity duration-1000 opacity-0 text-green-600"
          >
            You have access to this feature!
          </div>
        </div>

        <div className="flex flex-row items-center gap-4">
          <button 
            className="btn-primary"
            disabled={!isDemoOffFeatureEnabled}
            onClick={() => {
              const messageDiv = document.getElementById('message2');
              if (messageDiv) {
                messageDiv.style.opacity = '1';
                setTimeout(() => {
                  messageDiv.style.opacity = '0';
                }, 2000);
              }
            }}
          >
            I'm not entitled!
          </button>
          <div 
            id="message2"
            className="transition-opacity duration-1000 opacity-0 text-green-600"
          >
            You have access to this feature!
          </div>
        </div>
      </div>

      <div className="card">
        <p className="text-gray-700 font-medium mb-4">The code for the buttons above look like:</p>
        <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
{`const {
  value: isDemoOnFeatureEnabled,
} = useSchematicEntitlement("demo-on-feature");

...

<button 
  className="bg-blue-500 text-white px-4 py-2 rounded-md"
  disabled={!isDemoOnFeatureEnabled}
  onClick={() => { ... })
>
  Start Simple Reports
</button>
`}
        </pre>
      </div>

      <div className="card">
        <div className="text-gray-700 font-medium mb-4">To enable the second button:</div>
        <ol className="list-decimal ml-6 space-y-2 text-gray-600">
          <li>In Schematic, click on the "Features" tab, and click "Create"</li>
          <li>Enter the name "Demo Off Feature". <em>Note this is a "Boolean" feature -- either we have access or we don't</em></li>
          <li>Click "Continue"</li>
          <li>For the Flag Key, you <em>MUST</em> enter <code>demo-off-feature</code> (as that's what we're checking in the code)</li>
          <li>Click "Continue", then click "Save"</li>
          <li>Now you shold be on the feature's page. We'll need to entitle this to our plan. Click "Add Plan Entitlement"</li>
          <li>Select the Demo plan and click "Save".</li>
          <li>Now the second button should be clickable! (A refresh might be necessary to see the change.)</li>
        </ol>
      </div>
    </div>
  );
} 
