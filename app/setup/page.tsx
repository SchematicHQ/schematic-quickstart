export default function SetupPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Add an api key</h1>
      <ol className="list-decimal ml-4">
        <li>Create a Schematic account. This is free and can be done <a href="https://app.schematichq.com/sign-up">here</a>.</li>
        <li>Next, we'll need to create a Schematic api key.
          <img src="https://prod.ferndocs.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fhttps%3A%2F%2Fschematic.docs.buildwithfern.com%2F2025-04-16T20%3A18%3A05.794Z%2Fdocs%2Fpages%2Fget_started%2Fimages%2Fapi-key.png&w=3840&q=75" />
        </li>
        <li>Add your Schematic publishable key and secret key to the `.env.local` file. (We'll add the component id later)</li>
        <li>Restart this application and you should be good to go!</li>
      </ol>
    </div>
  );
}
