import { StaticImageData } from "next/image";
import img from "../../public/img/banner-top.jpg";
import project1picture from "../../public/img/project1-picture.png";
import project2picture from "../../public/img/project2-picture.png";
import project3picture from "../../public/img/project3-picture.png";

interface Project {
  id: string;
  title: string;
  desc: string;
  client: string;
  timeline: string;
  services: string[];
  picture: StaticImageData;
  challenge: string;
  solution: string;
  result: string;
  gallery: StaticImageData[];
  status: boolean;
  href: string;
}

export const ProjectsData: Project[] = [
  {
    id: "carlsburger",
    title: "CARLS BURGER",
    desc: "Web application about a hamburger restaurant that provides a satisfying, easy and attractive user experience, and is an excellent marketing tool to attract new customers and keep existing ones.",
    client: "Personal",
    timeline: "4 Weeks",
    services: ["Web Design"],
    picture: project1picture,
    challenge:
      "The challenge was to develop a website that would capture the visual essence of our business, while featuring a distinctive design that would set us apart from other competitors. The goal was to grab the attention of potential customers, provide them with a unique experience.",
    solution:
      "The challenge was to develop a website that would capture the visual essence of our business, while featuring a distinctive design that would set us apart from other competitors. The goal was to grab the attention of potential customers, provide them with a unique experience.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [img, img, img],
    status: true,
    href: "https://carls-burger.vercel.app/",
  },
  {
    id: "zonustech",
    title: "ZONUSTECH AGENCY",
    desc: "Comprehensive Website for Branding Creation Agency: Design, Development, Deployment and Configuration of Domain and Hosting.",
    client: "Personal",
    timeline: "3 Months",
    services: ["Web Design", "Web Development"],
    picture: project2picture,
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [img, img, img],
    status: true,
    href: "https://www.zonustech.com/",
  },
  {
    id: "modernfashion",
    title: "MODERFASHION",
    desc: "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers.",
    client: "Personal",
    timeline: "3 Months",
    services: ["Web Design", "Web Development", "UX/UI"],
    picture: project3picture,
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [img, img, img],
    status: true,
    href: "https://ecommerce-website-zeta-one.vercel.app/",
  },
];
