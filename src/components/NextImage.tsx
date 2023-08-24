"use client";
import Image from "next/image";
import React, { useState } from "react";

const NextImage = ({
  image,
  label = "picture image",
  blurData,
}: {
  image: string;
  label: string;
  blurData: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      src={image}
      alt={label}
      placeholder="blur"
      blurDataURL={blurData}
      className={`
      image-filter
      ${isLoading ? "true" : "false"})`}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default NextImage;
