import connectMongo from "@/libs/mongodb";
import Projects from "@/models/projects";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await connectMongo();
    const project = await Projects.findOne({ label: id });
    return NextResponse.json({ project });
  } catch (err) {
    console.log(err);
  }
}
