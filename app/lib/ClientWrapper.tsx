"use client";

import React, { useEffect, useState } from "react";
import {
  SchematicProvider,
  useSchematicEvents,
  useSchematicIsPending,
} from "@schematichq/schematic-react";
import { ClerkProvider } from "@clerk/nextjs";
import Loader from "@/app/lib/Loader";

const SchematicWrapped: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { identify } = useSchematicEvents();

  useEffect(() => {
    identify({
      company: {
        keys: { id: 'demo-company'},
      },
      keys: { id: 'demo-user' },
    });
    console.log("identified");
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
    throw new Error(
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
