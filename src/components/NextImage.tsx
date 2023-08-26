"use client";
import React, { useEffect, useState } from "react";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { cld } from "@/libs/cloudinary";

const NextImage = ({
  src,
  alt = "picture image",
  blurDataURL,
  width = 1000,
  height = 700,
}: {
  src: string;
  alt?: string;
  blurDataURL?: string;
  width?: number;
  height?: number;
}) => {
  // const [isLoading, setIsLoading] = useState(true);

  const myImage = cld.image(src);
  return (
    <AdvancedImage
      cldImg={myImage}
      plugins={[lazyload(), placeholder({ mode: "blur" })]}
    />
  );
};

export default NextImage;
