// "use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const NextImage = ({
  src,
  label = "picture image",
  blurDataURL,
  width,
  height,
}: {
  src: string | StaticImageData;
  label?: string;
  blurDataURL: string;
  width?: number;
  height?: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      src={src}
      alt={label}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={blurDataURL}
      className={isLoading ? "blurred" : "image-loaded"}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default NextImage;
