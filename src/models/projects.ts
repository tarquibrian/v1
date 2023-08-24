import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const Projects =
  mongoose.models.Topic || mongoose.model("projects", projectSchema);

export default Projects;
