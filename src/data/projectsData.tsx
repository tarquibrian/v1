import { StaticImageData } from "next/image";
import img from "../../public/img/banner-top.jpg";
import project1picture from "../../public/img/project1-picture.png";
import carlsSquarePicture from "../../public/img/squarecarls.png";
import carls1 from "../../public/img/carlsburger1.jpg";
import carls2 from "../../public/img/carlsburger2.png";
import carls3 from "../../public/img/carlsburger3.png";
import carlsMockup from "../../public/img/carlsmockup.webp";
import carlsMockup2 from "../../public/img/carlsmockup2.webp";
import project2picture from "../../public/img/project2-picture.png";
import zonusSquarePicture from "../../public/img/squarezonus.png";
import zonusMockup from "../../public/img/zonusmockup.webp";
import zonusMockup2 from "../../public/img/zonusmockup2.png";
import project3picture from "../../public/img/project3-picture.png";
import moderSquarePicture from "../../public/img/squaremodern.png";
import modernMockup from "../../public/img/modernmockup.webp";
import modernMockup2 from "../../public/img/modernmockup2.webp";
import projectVilaPicture from "../../public/img/villatyoursm-picture.png";
import villaSquarePicutre from "../../public/img/squarevilla.png";
import villaMockup from "../../public/img/villamockup.webp";
import villaMockup2 from "../../public/img/villamockup2.webp";

import darvythemeSquarePicture from "../../public/img/square1.png";
import darvythemePicture from "../../public/img/darvy-picture.png";
import darvyMockup from "../../public/img/darvymockup.webp";
import darvyMockup2 from "../../public/img/darvymockup2.webp";

import gymstormPicture from "../../public/img/gymstorm-picture.webp";
import gymstormPictureSquare from "../../public/img/gymstormSquare.webp";
import gymstormMockup from "../../public/img/gymstormmockup.png";
import gymstormMckup2 from "../../public/img/gymstormmockup2.webp";

import arkitectsPicture from "../../public/img/arkitects.webp";
import arkitectsSquare from "../../public/img/arkitectsSquare.webp";
import arkitectsMockup from "../../public/img/arkitectsmockup.webp";
import arkitectMockup2 from "../../public/img/arkitectsmockup2.webp";

interface Project {
  id: string;
  title: string;
  desc: string;
  client: string;
  timeline: string;
  services: string[];
  year?: number;
  website?: string;
  picture: { src: string; alt: string };
  challenge: string;
  solution: string;
  result: string;
  gallery: StaticImageData[];
  status: boolean;
  href: string;
  squarePicture: StaticImageData;
}

interface SingleProject {
  size: string[];
}

export const ProjectsData: Project[] = [
  {
    id: "arkitects",
    title: "ARKITECTS",
    desc: "Online platform specialized in architecture services, designed for a pleasant and efficient user experience. A strategic tool that attracts and retains clients by providing access to previous work.",
    client: "Arkitects",
    timeline: "2 Monts",
    services: ["UX/UI", "Web Dev", "CMS"],
    year: 2022,
    website: "carlsburger.com",
    picture: {
      src: "arkitects_h9yfwi",
      alt: "arkitects picture banner",
    },
    squarePicture: arkitectsSquare,
    challenge:
      "The callenge was to develop a website that would capture the visual essence of our business, while featuring a distinctive design that would set us apart from other competitors. The goal was to grab the attention of potential customers, provide them with a unique experience.",
    solution:
      "The callenge was to develop a website that would capture the visual essence of our business, while featuring a distinctive design that would set us apart from other competitors. The goal was to grab the attention of potential customers, provide them with a unique experience.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [arkitectsSquare, arkitectsMockup, arkitectMockup2],
    status: true,
    href: "https://www.behance.net/gallery/177999933/ARKITECTS-Architecture-Website-Concept",
  },
  {
    id: "carlsburger",
    title: "CARLS BURGER",
    desc: "Web application about a hamburger restaurant that provides a satisfying, easy and attractive user experience, and is an excellent marketing tool to attract new customers and keep existing ones.",
    client: "Carls Burger",
    timeline: "6 Weeks",
    services: ["UX/UI", "Web Dev", "CMS"],
    year: 2022,
    website: "carlsburger.com",
    picture: {
      src: "project1-picture_snqfl8",
      alt: "CarlsBurger restaurant picture",
    },
    squarePicture: carlsSquarePicture,
    challenge:
      "The challenge was to develop a website that would capture the visual essence of our business, while featuring a distinctive design that would set us apart from other competitors. The goal was to grab the attention of potential customers, provide them with a unique experience.",
    solution:
      "The challenge was to develop a website that would capture the visual essence of our business, while featuring a distinctive design that would set us apart from other competitors. The goal was to grab the attention of potential customers, provide them with a unique experience.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [carlsSquarePicture, carlsMockup, carlsMockup2],
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
    picture: {
      src: "zonustechpicture_dmp4dv",
      alt: "Zonustech agency picture project",
    },
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
    id: "gymstorm",
    title: "GYMSTORM",
    desc: "GymStorm is an exciting design project in Figma, where user experience and a visually appealing interface are combined. Every detail has been carefully thought out to create a seamless and engaging experience.",
    client: "Personal",
    timeline: "1 Weeks",
    services: ["UX", "UI", "Web Design"],
    year: 2022,
    website: "Dribbble | Behance",
    picture: {
      src: "gymstorm-picture_xryetr",
      alt: "GYMSTORM fitness landing page picture",
    },
    squarePicture: gymstormPictureSquare,
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [gymstormPictureSquare, gymstormMockup, gymstormMckup2],
    status: true,
    href: "https://dribbble.com/shots/22295109-GYMSTORM-Fitness-landing-page",
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
    picture: {
      src: "project3-picture_souhv9",
      alt: "Modernfashion project picture",
    },
    squarePicture: moderSquarePicture,
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [moderSquarePicture, modernMockup, modernMockup2],
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
    picture: {
      src: "villatyoursm-picture_zqwqzn",
      alt: "Villatourims project picture",
    },
    squarePicture: villaSquarePicutre,
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [villaSquarePicutre, villaMockup, villaMockup2],
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
    picture: { src: "darvy-picture_i5rxj1", alt: "DARVYTHEME VSCode picture" },
    squarePicture: darvythemeSquarePicture,
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [darvythemeSquarePicture, darvyMockup, darvyMockup2],
    status: true,
    href: "https://marketplace.visualstudio.com/items?itemName=darvy.darvypro",
  },
];
