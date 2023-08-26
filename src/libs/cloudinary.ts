import { Cloudinary } from "@cloudinary/url-gen";
console.log(process.env.CLOUDNAME);

export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUDNAME,
  },
});
