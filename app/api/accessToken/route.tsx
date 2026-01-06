import { NextRequest, NextResponse } from "next/server";
import { SchematicClient } from "@schematichq/schematic-typescript-node";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export async function GET(_request: NextRequest) {
  const apiKey = process.env.SCHEMATIC_SECRET_KEY;
  if (!apiKey) {
    return NextResponse.json({ message: "No Schematic key" }, { status: 400 });
  }

  try {
    const schematicClient = new SchematicClient({ apiKey });

    const resp = await schematicClient.accesstokens.issueTemporaryAccessToken({
      resource_type: "company",
      lookup: {
        'demo-id': 'demo-company',
      },
    });

    const accessToken = resp.data?.token;
    return NextResponse.json({ accessToken });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to issue access token" },
      { status: 500 },
    );
  }
}
