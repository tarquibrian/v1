import { Cloudinary } from "@cloudinary/url-gen";

const { CLOUDNAME } = process.env;
console.log(CLOUDNAME);

export const cld = new Cloudinary({
  cloud: {
    cloudName: CLOUDNAME,
  },
});
