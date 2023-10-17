// "use client";
import React from "react";
import Image from "next/image";

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
  return (
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
