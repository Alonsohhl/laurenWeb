import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-[60vh]"
    >
      <div className="max-w-[300px] md:max-w-[500px] flex flex-col items-center justify-center">
        <Image
          src="/images/mainBG.webp"
          alt="Lauren Hepburn, art picture"
          width={400}
          height={400}
          className="object-cover  h-auto  z-10 w-[100%]"
          priority
        />

        <Image
          src="/images/shape-barcode-secondary-600.svg"
          alt="Lauren Hepburn, art picture"
          width={300}
          height={300}
          className="absolute object-cover h-auto mb-40 ml-30"
          priority
        />

        <Image
          src="/images/shape-pixelated-secondary-600.svg"
          alt="Lauren Hepburn, art picture"
          width={300}
          height={300}
          className="absolute object-cover h-auto mt-40 mr-80"
          priority
        />
      </div>
    </section>
  );
};
