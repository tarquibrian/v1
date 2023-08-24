"use client";
import Image from "next/image";
import React, { useState } from "react";

const NextImage = ({
  image,
  label = "picture image",
  blurData,
  width,
  height,
}: {
  image: string;
  label: string;
  blurData: string;
  width: number;
  height: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      src={image}
      alt={label}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={blurData}
      className={`
      image-filter
      ${isLoading ? "true-image" : "true"})`}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default NextImage;
