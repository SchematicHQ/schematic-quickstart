"use client";
import React from 'react';
import SchematicComponent from './SchematicComponent';

export default function ComponentsPage() {
  const componentId = process.env.NEXT_PUBLIC_SCHEMATIC_COMPONENT_ID || "";

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h1>Components</h1>
      <p className="mb-2">
        Schematic provides a component builder to quickly deploy components to quickly solve many common billing scenarios, including: 
      </p>
      <ol className="list-decimal ml-4 text-gray-600">
        <li>Customer Portal</li>
        <li>Checkout flow</li>
        <li>Usage Meters</li>
        <li>Paywalls</li>
      </ol>

      <div className="card space-y-8">
        <SchematicComponent componentId={componentId} />
      </div>

      <div>
        <h3>Creating this component</h3>
        <p>
          We can quickly create components in Schematic. Here is <a href="https://docs.schematichq.com/quickstart/create-a-component" target="_blank">a quick walkthrough</a> of creating a Customer Portal.
        </p>
      </div>

      <div>
        <h3>Component Documentation</h3>
        <p>
          Schematic's component builder is feature rich and can support many use cases. See a full breakdown <a href="https://docs.schematichq.com/react/components" target="_blank">in our docs</a>.
        </p>
      </div>

      <div className="card">
        <h3>The code for the Component above looks like:</h3>
        <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
{`
// this file
const componentId = process.env.NEXT_PUBLIC_SCHEMATIC_COMPONENT_ID || "";
<SchematicComponent componentId={componentId} />

// SchematicComponent.tsx
// fetch a short-lived access token from your api to render component
const accessToken = await fetchAccessToken()
<SchematicEmbed
  accessToken={accessToken}
  id={componentId}
/>
`}
        </pre>
      </div>
    </div>
  );
} 