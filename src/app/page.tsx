import AboutWrapper from "@/components/aboutWrapper";
import EducationWrapper from "@/components/educationWrapper";
import ExperienceWrapper from "@/components/experienceWrapper";
import PostWrapper from "@/components/postWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <AboutWrapper />
      <ExperienceWrapper />
      <EducationWrapper />
    </>
  );
}
