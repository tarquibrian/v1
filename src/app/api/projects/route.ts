import connectMongo from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Projects from "@/models/projects";

export async function GET() {
  try {
    await connectMongo();
    const projects = await Projects.find();
    return NextResponse.json({ projects });
  } catch (err) {
    console.log(err);
  }
}
