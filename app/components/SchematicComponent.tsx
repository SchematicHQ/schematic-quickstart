import React, { useEffect, useState } from "react";
import { SchematicEmbed } from "@schematichq/schematic-components";

import Loader from "@/app/lib/Loader";

export default function UsageAndPlan({
  componentId
}: {
  componentId: string
}) {
  const [error, setError] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAccessToken = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/accessToken");
      const result = await response.json();
      if ("accessToken" in result) {
        setAccessToken(result.accessToken);
      }
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Error fetching data");
      setAccessToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAccessToken();
  }, []);

  if (!componentId) {
    console.error(
      "Missing Schematic component ID (NEXT_PUBLIC_SCHEMATIC_COMPONENT_ID)",
    );

    return <div>Component Not Configured</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error || !accessToken) {
    return <div>{error ?? "Unknown error"}</div>;
  }

  return (
    <SchematicEmbed
      accessToken={accessToken}
      id={componentId}
    />
  );
}