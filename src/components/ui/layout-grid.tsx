"use client";

import Masonry from "react-masonry-css";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 ",
    thumbnail: "/images/portfolio/0ACE553C-7A52-4B95-A9CA-0D30150A090C.webp",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/92194682-3737-48C5-A54D-0905EAE28C7F.webp",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/acro1.webp",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/acro2.webp",
  },
  {
    id: 5,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/acropolis.webp",
  },
  {
    id: 6,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/africa.webp",
  },
  {
    id: 7,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/Artists-by-the-River-10.25x7_2.jpg",
  },
  {
    id: 8,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/At-the-Dock-24x30-1.jpg",
  },
  {
    id: 9,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/Blue-Vase-30x40-lower-res.jpg",
  },
  {
    id: 10,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/cab2.webp",
  },
  {
    id: 11,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/caba1.webp",
  },
  {
    id: 12,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/caba3.webp",
  },
  {
    id: 13,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/Dennis-the-Menace-24x30-1.jpg",
  },
  {
    id: 14,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/Evening-in-Budapest-V2-12x36-MediumRes.jpg",
  },
  {
    id: 15,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/fun.webp",
  },
  {
    id: 16,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/gardennn.webp",
  },
  {
    id: 17,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/hep.webp",
  },
  {
    id: 18,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/kent_clyde_640px.jpg",
  },
  {
    id: 19,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/kent_hepburns-flowers-2_640px-1.jpg",
  },
  {
    id: 20,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/Lilly-in-Red-30x30-2.jpg",
  },
  {
    id: 21,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/lynpoppy.webp",
  },
  {
    id: 22,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/nasturium.webp",
  },
  {
    id: 23,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/Night-Flowers-23.75-x-24-lower-res.jpg",
  },
  {
    id: 24,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/osaka.webp",
  },
  {
    id: 25,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/Pink-Water-Lily-30x30-2.jpg",
  },
  {
    id: 26,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/poe.webp",
  },
  {
    id: 27,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/poppie.webp",
  },
  {
    id: 28,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/poppy.jpg",
  },
  // Continue with remaining images...
  {
    id: 29,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/pre.webp",
  },
  {
    id: 30,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/prepoppies.webp",
  },
  {
    id: 31,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/Primary-Pots-36x18_2.jpg",
  },
  {
    id: 32,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/Roses-Garden-24x30_1.jpg",
  },
  {
    id: 33,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/shangai.webp",
  },
  {
    id: 34,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/Sicilys-Olive-Grove-36x18-1.jpg",
  },
  {
    id: 35,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/Sienne-Nude-17.24-x-12.75-1.png",
  },
  {
    id: 36,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/The-Cycle-5x7-cards.webp",
  },
  {
    id: 37,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/portfolio/Tulip-Chaos-24x30-MediiumRes.jpg",
  },
  {
    id: 38,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/portfolio/whitepopp.webp",
  },
];

const LayoutGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dimensions, setDimensions] = useState([]);

  useEffect(() => {
    // Generate random dimensions for each card
    const newDimensions = cards.map(() => {
      const ratios = [
        { width: 1, height: 1 }, // Square
        { width: 3, height: 4 }, // Portrait
        { width: 4, height: 3 }, // Landscape
        { width: 16, height: 9 }, // Wide
        { width: 2, height: 3 }, // Tall portrait
      ];
      return ratios[Math.floor(Math.random() * ratios.length)];
    });
    setDimensions(newDimensions);
  }, []);

  const breakpointColumns = {
    default: 2,
    1536: 2,
    1024: 2,
    640: 1,
  };

  return (
    <div className=" relative">
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4"
          >
            <Card
              className="rounded-none overflow-hidden group cursor-pointer relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelectedImage(card)}
            >
              <AspectRatio
                ratio={
                  dimensions[index]?.width / dimensions[index]?.height || 1
                }
                className="bg-gray-100"
              >
                <Image
                  src={card.thumbnail}
                  alt={`Artwork ${card.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              </AspectRatio>
            </Card>
          </motion.div>
        ))}
      </Masonry>

      <AnimatePresence>
        {selectedImage && (
          <Dialog
            open={!!selectedImage}
            onOpenChange={() => setSelectedImage(null)}
          >
            <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <DialogClose className="absolute right-4 top-4 rounded-full p-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <X className="w-5 h-5" />
                </DialogClose>

                <div className="relative overflow-hidden  shadow-xl">
                  <Image
                    src={selectedImage.thumbnail}
                    alt={`Artwork ${selectedImage.id}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/90 backdrop-blur-sm p-4 shadow-lg"
                >
                  <p className="text-lg leading-relaxed text-gray-800">
                    {selectedImage.content}
                  </p>
                </motion.div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LayoutGrid;
