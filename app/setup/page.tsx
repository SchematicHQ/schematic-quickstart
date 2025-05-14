export default function SetupPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Add an API key</h1>
      <div className="card">
        <ol className="list-decimal ml-6 space-y-4 text-gray-600">
          <li>Create a Schematic account. This is free and can be done <a href="https://app.schematichq.com/sign-up" className="text-blue-600 hover:text-blue-800 underline">here</a>.</li>
          <li>Next, we'll need to create a Schematic api key.
            <div className="mt-4 rounded-lg overflow-hidden">
              {/* TODO This url will break I think */}
              <img src="https://prod.ferndocs.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fhttps%3A%2F%2Fschematic.docs.buildwithfern.com%2F2025-04-16T20%3A18%3A05.794Z%2Fdocs%2Fpages%2Fget_started%2Fimages%2Fapi-key.png&w=3840&q=75" alt="API Key instructions" className="w-full" />
            </div>
          </li>
          <li>Add your Schematic publishable key and secret key to the `.env.local` file. (We'll add the component id later)</li>
          <li>Restart this application and you should be good to go!</li>
        </ol>
      </div>

      <p className="italic">NOTE: To simplify this quickstart and demonstrate key Schematic features, each new account is provisioned with a demo customer, plan, and a few features. This quickstart is designed to leverage those to help guide you through Schematic. Feel free to delete those when you're ready.</p>
    </div>
  );
}
