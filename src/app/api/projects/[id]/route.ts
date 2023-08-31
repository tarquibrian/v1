import connectMongo from "@/libs/mongodb";
import Projects from "@/models/projects";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await connectMongo();
  const project = await Projects.findOne({ label: id });
  console.log("prooooject", project);
  return NextResponse.json({ project });
}
