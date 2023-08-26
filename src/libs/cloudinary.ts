import { Cloudinary } from "@cloudinary/url-gen";

const { CLOUDNAME } = process.env;

export const cld = new Cloudinary({
  cloud: {
    cloudName: CLOUDNAME,
  },
});
