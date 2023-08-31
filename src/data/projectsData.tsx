interface Project {
  label: string;
  title: string;
  desc: string;
  client: string;
  timeline: string;
  services: string[];
  year?: number;
  website?: string;
  picture: Picture;
  challenge: string;
  solution: string;
  result: string;
  gallery: Picture[];
  status: boolean;
  href: string;
  squarePicture: Picture;
}

interface Picture {
  src: string;
  alt: string;
}

export const ProjectsData: Project[] = [
  {
    label: "arkitects",
    title: "ARKITECTS",
    desc: "Online platform specialized in architecture services, designed for a pleasant and efficient user experience. A strategic tool that attracts and retains clients by provlabeling access to previous work.",
    client: "Arkitects",
    timeline: "2 Monts",
    services: ["UX/UI", "Web Dev", "CMS"],
    year: 2022,
    website: "carlsburger.com",
    picture: {
      src: "arkitects_h9yfwi",
      alt: "arkitects picture banner",
    },
    squarePicture: {
      src: "arkitectsSquare_qdmewu",
      alt: "arkitects square picture project",
    },
    challenge:
      "The callenge was to develop a website that would capture the visual essence of our business, while featuring a distinctive design that would set us apart from other competitors. The goal was to grab the attention of potential customers, provlabele them with a unique experience.",
    solution:
      "The callenge was to develop a website that would capture the visual essence of our business, while featuring a distinctive design that would set us apart from other competitors. The goal was to grab the attention of potential customers, provlabele them with a unique experience.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [
      { src: "arkitectsSquare_qdmewu", alt: "arkitects picture banner" },
      { src: "arkitectsmockup_kaa7cs", alt: "arkitects picture banner" },
      { src: "arkitectsmockup2_znrohg", alt: "arkitects picture banner" },
    ],
    status: true,
    href: "https://www.behance.net/gallery/177999933/ARKITECTS-Architecture-Website-Concept",
  },
  {
    label: "carlsburger",
    title: "CARLS BURGER",
    desc: "Web application about a hamburger restaurant that provlabeles a satisfying, easy and attractive user experience, and is an excellent marketing tool to attract new customers and keep existing ones.",
    client: "Carls Burger",
    timeline: "6 Weeks",
    services: ["UX/UI", "Web Dev", "CMS"],
    year: 2022,
    website: "carlsburger.com",
    picture: {
      src: "project1-picture_snqfl8",
      alt: "CarlsBurger restaurant picture",
    },
    squarePicture: {
      src: "squarecarls_waed91",
      alt: "carlsburger restauran square picture project",
    },
    challenge:
      "The challenge was to develop a website that would capture the visual essence of our business, while featuring a distinctive design that would set us apart from other competitors. The goal was to grab the attention of potential customers, provlabele them with a unique experience.",
    solution:
      "The challenge was to develop a website that would capture the visual essence of our business, while featuring a distinctive design that would set us apart from other competitors. The goal was to grab the attention of potential customers, provlabele them with a unique experience.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [
      { src: "squarecarls_waed91", alt: "CarlsBurger restaurant picture" },
      { src: "carlsmockup_ajvrcm", alt: "CarlsBurger restaurant picture" },
      { src: "carlsmockup2_i0agoo", alt: "CarlsBurger restaurant picture" },
    ],
    status: true,
    href: "https://carls-burger.vercel.app/",
  },
  {
    label: "zonustech",
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
    squarePicture: {
      src: "squarezonus_rpd41x",
      alt: "zonustech agency picture project",
    },
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [
      { src: "squarezonus_rpd41x", alt: "Zonustech agency picture project" },
      { src: "zonusmockup_zsvn3j", alt: "Zonustech agency picture project" },
      { src: "zonusmockup2_iobcti", alt: "Zonustech agency picture project" },
    ],
    status: true,
    href: "https://www.zonustech.com/",
  },
  {
    label: "gymstorm",
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
    squarePicture: {
      src: "gymstormSquare_xvy1zf",
      alt: "gymstorm square picture project",
    },
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [
      {
        src: "gymstormSquare_xvy1zf",
        alt: "GYMSTORM fitness landing page picture",
      },
      {
        src: "gymstormmockup_afez0h",
        alt: "GYMSTORM fitness landing page picture",
      },
      {
        src: "gymstormmockup2_dyrq9x",
        alt: "GYMSTORM fitness landing page picture",
      },
    ],
    status: true,
    href: "https://dribbble.com/shots/22295109-GYMSTORM-Fitness-landing-page",
  },
  {
    label: "modernfashion",
    title: "MODERFASHION",
    desc: "Modern clothing ecommerce web application that offers a wlabele selection of clothing and fashion accessories for demanding customers.",
    client: "Personal",
    timeline: "4 Weeks",
    services: ["Web Design", "Web Development", "UX/UI"],
    year: 2022,
    website: "modernfashion.com",
    picture: {
      src: "project3-picture_souhv9",
      alt: "Modernfashion project picture",
    },
    squarePicture: {
      src: "squaremodern_pntu31",
      alt: "modernfashion square picture project",
    },
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [
      { src: "squaremodern_pntu31", alt: "Modernfashion project picture" },
      { src: "modernmockup_tmz54d", alt: "Modernfashion project picture" },
      { src: "modernmockup2_vevx0n", alt: "Modernfashion project picture" },
    ],
    status: true,
    href: "https://ecommerce-website-zeta-one.vercel.app/",
  },
  {
    label: "villarivero",
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
    squarePicture: {
      src: "squarevilla_vfhkod",
      alt: "villatourims square picture project",
    },
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [
      { src: "squarevilla_vfhkod", alt: "Villatourims project picture" },
      { src: "villamockup_rcdohf", alt: "Villatourims project picture" },
      { src: "villamockup2_lhytym", alt: "Villatourims project picture" },
    ],
    status: false,
    href: "https://villa-turismo.herokuapp.com/",
  },
  {
    label: "darvytheme",
    title: "DARVY THEME",
    desc: "Darvy Theme is a color theme for Visual Studio Code and very soon for other editors like Atom or Sublime Text. The color palette is inspired by popular themes like One Dark Pro and Tokyo Night, so you might love this theme",
    client: "Personal",
    timeline: "2 Weeks",
    services: ["", "", ""],
    year: 2022,
    website: "VSMarketplace",
    picture: { src: "darvy-picture_i5rxj1", alt: "DARVYTHEME VSCode picture" },
    squarePicture: {
      src: "square1_waasj0",
      alt: "darvytheme square picture project",
    },
    challenge:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    solution:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    result:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio eius dolores rerum ducimus impedit illo in fugit consequuntur, iste voluptas neque placeat.",
    gallery: [
      { src: "square1_waasj0", alt: "DARVYTHEME VSCode picture" },
      { src: "darvymockup_wxkaxr", alt: "DARVYTHEME VSCode picture" },
      { src: "darvymockup2_pzhlf3", alt: "DARVYTHEME VSCode picture" },
    ],
    status: true,
    href: "https://marketplace.visualstudio.com/items?itemName=darvy.darvypro",
  },
];
