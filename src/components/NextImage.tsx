// "use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

const NextImage = ({
  src,
  label = "picture image",
  blurDataURL,
  width,
  height,
}: {
  src: string;
  label?: string;
  blurDataURL: string;
  width?: number;
  height?: number;
}) => {
  // const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      src={`https://res.cloudinary.com/dskypy0xt/image/upload/v1692899385/${src}`}
      alt={label}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={blurDataURL}
      // className={isLoading ? "blurred" : "image-loaded"}
      // onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default NextImage;
