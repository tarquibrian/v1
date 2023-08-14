import { StaticImageData } from "next/image";
import img from "../../public/img/banner-top.jpg";
import project1picture from "../../public/img/project1-picture.png";
import carlsSquarePicture from "../../public/img/squarecarls.png";
import carls1 from "../../public/img/carlsburger1.jpg";
import carls2 from "../../public/img/carlsburger2.png";
import carls3 from "../../public/img/carlsburger3.png";
import project2picture from "../../public/img/project2-picture.png";
import zonusSquarePicture from "../../public/img/squarezonus.png";
import zonusMockup from "../../public/img/zonusmockup.webp";
import zonusMockup2 from "../../public/img/zonusmockup2.png";
import project3picture from "../../public/img/project3-picture.png";
import moderSquarePicture from "../../public/img/squaremodern.png";
import projectVilaPicture from "../../public/img/villatyoursm-picture.png";
import villaSquarePicutre from "../../public/img/squarevilla.png";

import darvythemeSquarePicture from "../../public/img/square1.png";
import darvythemePicture from "../../public/img/darvy-picture.png";

interface Project {
  id: string;
  title: string;
  desc: string;
  client: string;
  timeline: string;
  services: string[];
  year?: number;
  website?: string;
  picture: StaticImageData;
  challenge: string;
  solution: string;
  result: string;
  gallery: StaticImageData[];
  status: boolean;
  href: string;
  squarePicture: StaticImageData;
}

export const ProjectsData: Project[] = [
  {
    id: "carlsburger",
    title: "CARLS BURGER",
    desc: "Web application about a hamburger restaurant that provides a satisfying, easy and attractive user experience, and is an excellent marketing tool to attract new customers and keep existing ones.",
    client: "Carls Burger",
    timeline: "6 Weeks",
    services: ["UX/UI", "Web Dev", "CMS"],
    year: 2022,
    website: "carlsburger.com",
    picture: project1picture,
    squarePicture: carlsSquarePicture,
    challenge:
      "The challenge was to develop a website that would capture the visual essence of our business, while featuring a distinctive design that would set us apart from other competitors. The goal was to grab the attention of potential customers, provide them with a unique experience.",
    solution:
      "The challenge was to develop a website that would capture the visual essence of our business, while featuring a distinctive design that would set us apart from other competitors. The goal was to grab the attention of potential customers, provide them with a unique experience.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [carlsSquarePicture, carls2, carls3],
    status: true,
    href: "https://carls-burger.vercel.app/",
  },
  {
    id: "zonustech",
    title: "ZONUSTECH AGENCY",
    desc: "Comprehensive Website for Branding Creation Agency: Design, Development, Deployment and Configuration of Domain and Hosting.",
    client: "Zonustech",
    timeline: "3 Months",
    services: ["Web Design", "Web Development"],
    year: 2023,
    website: "zonustech.com",
    picture: project2picture,
    squarePicture: zonusSquarePicture,
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [zonusSquarePicture, zonusMockup, zonusMockup2],
    status: true,
    href: "https://www.zonustech.com/",
  },
  {
    id: "modernfashion",
    title: "MODERFASHION",
    desc: "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers.",
    client: "Personal",
    timeline: "4 Weeks",
    services: ["Web Design", "Web Development", "UX/UI"],
    year: 2022,
    website: "modernfashion.com",
    picture: project3picture,
    squarePicture: moderSquarePicture,
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [moderSquarePicture, img, img],
    status: true,
    href: "https://ecommerce-website-zeta-one.vercel.app/",
  },
  {
    id: "villarivero",
    title: "VILLA TOURISM",
    desc: "Web application for tourist information management, using modules of Biographical Articles, Management and notification of cultural events, Visualization and addressing of tourist sites through Google Maps based on specific coordinates.",
    client: "Villa Rivero",
    timeline: "6 Months",
    services: ["Web Design", "Web Development", "UX/UI", "DB Design", "DevOps"],
    year: 2022,
    website: "villatourism.com",
    picture: projectVilaPicture,
    squarePicture: villaSquarePicutre,
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [villaSquarePicutre, img, img],
    status: false,
    href: "https://villa-turismo.herokuapp.com/",
  },
  {
    id: "darvytheme",
    title: "DARVY THEME",
    desc: "Darvy Theme is a color theme for Visual Studio Code and very soon for other editors like Atom or Sublime Text. The color palette is inspired by popular themes like One Dark Pro and Tokyo Night, so you might love this theme",
    client: "Personal",
    timeline: "2 Weeks",
    services: ["", "", ""],
    year: 2022,
    website: "VSMarketplace",
    picture: darvythemePicture,
    squarePicture: darvythemeSquarePicture,
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [darvythemeSquarePicture, img, img],
    status: true,
    href: "https://marketplace.visualstudio.com/items?itemName=darvy.darvypro",
  },
];
