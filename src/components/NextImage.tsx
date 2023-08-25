// "use client";
import Image, { StaticImageData } from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

const NextImage = ({
  src,
  label = "picture image",
  blurDataURL,
  width,
  height,
  loader,
  setLoader,
}: {
  src: string | StaticImageData;
  label?: string;
  blurDataURL: string;
  width?: number;
  height?: number;
  loader: boolean;
  setLoader: Function;
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
      className={loader ? "blurred" : "image-loaded"}
      // onLoadingComplete={() => setIsLoading(false)}
      onLoadingComplete={() => setLoader(false)}
    />
  );
};

export default NextImage;
