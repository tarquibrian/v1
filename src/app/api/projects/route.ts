import connectMongo from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Projects from "@/models/projects";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  try {
    await connectMongo();
    const projects = await Projects.find();
    return NextResponse.json({ projects });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "SERVER ERRROR",
      },
      { status: 500 }
    );
  }
}
