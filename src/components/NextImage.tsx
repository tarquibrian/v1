// "use client";
import React from "react";
import Image from "next/image";
// import { cld } from "@/libs/cloudinary";
// import { AdvancedImage, responsive, lazyload, placeholder } from "@cloudinary/react";

const NextImage = ({
  src,
  alt = "picture image",
  blurDataURL,
  width = 1000,
  height = 600,
}: {
  src: string;
  alt?: string;
  blurDataURL?: string;
  width?: number;
  height?: number;
}) => {
  // const myImage = cld.image(src);
  return (
    // <AdvancedImage
    //   cldImg={myImage}
    //   plugins={[responsive(), lazyload(), placeholder({ mode: "blur" })]}
    // />
    <Image
      src={`https://res.cloudinary.com/dskypy0xt/image/upload/v1693362047/${src}`}
      alt={alt}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={blurDataURL}
    />
  );
};

export default NextImage;
