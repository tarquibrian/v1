import { StaticImageData } from "next/image";
import img from "../../public/img/banner-top.jpg";

interface Project {
  id: string;
  title: string;
  desc: string;
  client: string;
  timeline: string;
  services: string[];
  picture: StaticImageData;
  challenge: string;
  goal: string;
  solution: string;
  gallery: StaticImageData[];
}

export const ProjectsData: Project[] = [
  {
    id: "project1",
    title: "Title Project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum expedita quam doloremque molestias, reprehenderit ipsa",
    client: "Personal",
    timeline: "4 weeks",
    services: ["Branding", "Web Design"],
    picture: img,
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    goal: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [img, img, img],
  },
  {
    id: "project2",
    title: "Title Project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum expedita quam doloremque molestias, reprehenderit ipsa",
    client: "Personal",
    timeline: "4 weeks",
    services: ["Branding", "Web Design"],
    picture: img,
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    goal: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [img, img, img],
  },
];
