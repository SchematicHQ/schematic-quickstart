"use client";

import React, { useEffect, useState } from "react";
import {
  SchematicProvider,
  useSchematicEvents,
} from "@schematichq/schematic-react";

const SchematicWrapped: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { identify } = useSchematicEvents();

  useEffect(() => {
    setTimeout(() => {
      identify({
        company: {
          keys: { 'demo-id': 'demo-company' },
        },
        keys: { 'demo-id': 'demo-user' },
        });
    }, 0);
  }, [identify]);

  return children;
};

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const schematicPubKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;
  if (!schematicPubKey) {
    console.error(
      "No Schematic Publishable Key found. Please add it to your .env.local file.",
    );
  }

  const [isClientSide, setIsClientSide] = useState(false);
  useEffect(() => {
    setIsClientSide(true);
  }, []);

  return (
    isClientSide ? (
      <SchematicProvider publishableKey={schematicPubKey} debug={true}>
        <SchematicWrapped>{children}</SchematicWrapped>
      </SchematicProvider>
    ) : (
      <div>Loading...</div>
    )
  );
}
