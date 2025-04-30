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
    <div className="p-8">
      {/* {isPending ? <div>Loading...</div> : <div>Loaded</div>} */}
      <h1 className="text-2xl font-bold mb-4">Entitlements</h1>
      <p>Entitlements is a fancy word for "the company plan allows them to do this". In Schematic, features are <em>entitled</em> to plans. This first feature (simple reports) is entitled to your plan. The second feature (advanced reports) is not.</p>

      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-row items-center gap-4">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
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
            className="transition-opacity duration-1000 opacity-0"
          >
            You have access to this feature!
          </div>

          <div className="flex flex-row items-center gap-4">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              disabled={!isDemoOffFeatureEnabled}
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
              I'm not entitled!
            </button>
            <div 
              id="message"
              className="transition-opacity duration-1000 opacity-0"
            >
              You have access to this feature!
            </div>
          </div>
        </div>

        <p>The code for the buttons above look like:</p>
        <pre>
      {`
const {
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

        <div className="mt-4">To enable the second button:</div>
        <ol className="list-decimal ml-4">
          <li>In Schematic, click on the "Features" tab, and click "Create"</li>
          <li>Enter the name "Demo Off Feature"</li>
          <li><em>Note this is a "Boolean" feature -- either we have access or we don't</em></li>
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
