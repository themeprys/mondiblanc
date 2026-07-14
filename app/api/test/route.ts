import { cosmic } from "@/lib/cosmic";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await cosmic.objects.find().limit(1);

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to connect to Cosmic" },
      { status: 500 }
    );
  }
}