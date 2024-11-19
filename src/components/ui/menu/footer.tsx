import React from "react";
import Image from "next/image";

export const CircularImage = () => {
  return (
    <div className="relative w-24 h-24">
      <div className="aspect-square overflow-hidden rounded-full">
        <Image
          src="/images/lauren.jpg"
          alt="Circular image"
          width={150}
          height={150}
          className="object-cover w-full h-full border-2 border-gray-300"
          priority
        />
      </div>
    </div>
  );
};

export default CircularImage;
