"use client";
import { useSchematicEntitlement, useSchematicIsPending } from '@schematichq/schematic-react';

export default function EntitlementsPage() {
  const {
    value: isDemoBooleanFeatureEnabled,
  } = useSchematicEntitlement("demo-boolean-feature");

  const {
    value: isNewBooleanFeatureEnabled,
  } = useSchematicEntitlement("new-boolean-feature");

  const isPending = useSchematicIsPending();

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Entitlements</h1>
      <p className="text-gray-600 mb-8">Entitlements is a fancy word for "the company plan allows them to do this". In Schematic, features are <em>entitled</em> to plans. This first feature (button) is entitled to your plan. The second feature (button) is not.</p>

      <div className="card space-y-8">
        <div className="flex flex-row items-center gap-4">
          <button 
            className="btn-primary"
            disabled={!isDemoBooleanFeatureEnabled}
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
            disabled={!isNewBooleanFeatureEnabled}
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
            {isNewBooleanFeatureEnabled ? "I'm entitled too!" : "I'm not entitled (yet)!"}
          </button>
          <div 
            id="message2"
            className="transition-opacity duration-1000 opacity-0 text-green-600"
          >
            You have access to this feature!
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-gray-700 font-semibold mb-4">Enabling the second button</div>
        <div className="text-gray-600">
          We can easily add an entitlement so that the second button is clickable as well. A quick walkthrough (with a video) can be found <a href="https://docs.schematichq.com/quickstart/entitling-a-feature">in our docs</a>.
        </div>
      </div>

      <div className="card">
        <p className="text-gray-700 font-semibold mb-4">The code for the buttons above look like:</p>
        <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
{`const {
  value: isDemoBooleanFeatureEnabled,
} = useSchematicEntitlement("demo-boolean-feature");

...

<button 
  className="bg-blue-500 text-white px-4 py-2 rounded-md"
  disabled={!isDemoBooleanFeatureEnabled}
  onClick={() => { ... })
>
  I'm entitled!
</button>
`}
        </pre>
      </div>
    </div>
  );
} 
