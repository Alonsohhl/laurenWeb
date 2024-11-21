"use client";

import Masonry from "react-masonry-css";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cards } from "./paintings";
import ArtworkInfo from "./artworkInfo";

interface Dimensions {
  width: number;
  height: number;
}

export interface CardType {
  id: number;
  title: string;
  dimensions: string;
  price: number | null;
  status: string;
  printPrice: number | null;
  gicleePrice: number | null;
  style: string | null;
  thumbnail: string;
  className: string;
}

const LayoutGrid = () => {
  const [selectedImage, setSelectedImage] = useState<CardType | null>(null);
  const [dimensions, setDimensions] = useState<Dimensions[]>([]);

  useEffect(() => {
    const ratios: Dimensions[] = [
      { width: 1, height: 1 }, // Square
      { width: 3, height: 4 }, // Portrait
      { width: 4, height: 3 }, // Landscape
      { width: 16, height: 9 }, // Wide
      { width: 2, height: 3 }, // Tall portrait
    ];

    const newDimensions = cards.map(
      () => ratios[Math.floor(Math.random() * ratios.length)],
    );

    setDimensions(newDimensions);
  }, []);

  const breakpointColumns = {
    default: 2,
    1536: 2,
    1024: 2,
    640: 1,
  };

  return (
    <div className="relative block">
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

                <div className="relative overflow-hidden shadow-xl">
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
                  className="bg-destructive-foreground backdrop-blur-sm p-4 shadow-lg"
                >
                  <div className="text-lg leading-relaxed text-destructive bg-destructive-foreground">
                    <ArtworkInfo artwork={selectedImage} />
                  </div>
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
