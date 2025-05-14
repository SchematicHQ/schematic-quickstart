"use client";
import React from 'react';

export default function IdentifyPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h1>Identifying Users</h1>
      <p className="mb-8">
        Requests to Schematic require identifying information about the user so that Schematic can load the appropriate entitlements and usage data to provide you with real-time flag checks.
      </p>

      <p>
        A thorough explanation of creating and identifying users can be found in <a href="https://docs.schematichq.com/developer_resources/identifying_users">in our docs</a>. These docs provide recommendations and best practices for managing your customers in Schematic. Additionally, an explanation of keys and how to best model them can be found <a href="https://docs.schematichq.com/developer_resources/key_management">here</a>
      </p>

      <h2>Client Side Identification</h2>
      <p className="mb-8">
        Schematic's client side SDKs provide an <code>identify()</code> function that should be called once on page load. This will load the flag check data for the user and set the user and company as context for future SDK calls. This interface works similar to other feature flagging and user analytics tools, and we recommend calling <code>identify()</code> at a similar time as those other tools.
      </p>

      <div className="card bg-gray-50">
        <h3>The identify call for this quickstart app:</h3>
        <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
{`useEffect(() => {
  identify({
    company: {
      keys: { id: 'demo-company' },
    },
    keys: { id: 'demo-user' },
    });
}, [identify]);`}
        </pre>
      </div>

      <h2>Server Side Identification</h2>
      <p className="mb-8">
        Schematic's API and server side SDKs requires each call to identify the user. Each call requires a uniform <code>keys</code> object to be passed that Schematic uses to correctly identify the user. 
      </p>

      <div className="card bg-gray-50">
        <h3>A sample call creating a company in Python:</h3>
        <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
{`client.companies.upsert_company(
    keys={"id": "demo-company"},
    name="Acme Widgets, Inc.",
    traits={
        "city": "Atlanta",
        "high_score": 25,
        "is_active": true,
    },
)`}
        </pre>
      </div>
    </div>
  );
}  
