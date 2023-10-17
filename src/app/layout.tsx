import React from "react";
import ThreeCanvas from "@/threejs/canvas";
import "../styles/global.scss";
import type { Metadata } from "next";
import WrapperView from "@/components/wrapperView";

export const metadata: Metadata = {
  title: "Brian Tarqui - Digital Freelancer",
  description:
    "Crafting inclusive digital products and web experiences is my expertise, making the online world accessible to everyone. Let's collaborate to build a more inclusive digital landscape.",
  openGraph: {
    url: "https://www.tarquibrian.com/",
    type: "website",
    title: "Brian Tarqui - Digital Freelancer",
    siteName: "tarquibrian.com",
    images: [{ url: "https://tarquibrian.com/og.png", alt: "Brian Tarqui OG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Tarqui - Digital Freelancer",
    description:
      "Crafting inclusive digital products and web experiences is my expertise, making the online world accessible to everyone. Let's collaborate to build a more inclusive digital landscape.",
    images: ["https://tarquibrian.com/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WrapperView>{children}</WrapperView>
        <ThreeCanvas />
      </body>
    </html>
  );
}
