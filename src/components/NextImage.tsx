"use client";
import React, { useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

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
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dskypy0xt",
    },
  });

  const myImage = cld.image(src);
  return <AdvancedImage cldImg={myImage} />;
};

export default NextImage;
