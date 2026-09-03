import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    console.log({
      name,
      email,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Message received successfully.",
    });
  } catch {
    return NextResponse.json(
      {
        message: "Unable to process request.",
      },
      {
        status: 500,
      }
    );
  }
}