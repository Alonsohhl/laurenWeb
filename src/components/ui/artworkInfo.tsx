import React from "react";
import { Paintbrush, DollarSign, Ruler } from "lucide-react";
import { CardType } from "./layout-grid";

const ArtworkInfo = ({ artwork }: { artwork: CardType }) => {
  const { title, dimensions, price, status, printPrice, gicleePrice, style } =
    artwork;

  return (
    <div className="p-4 space-y-4">
      {/* Title and Status */}
      <div className="flex justify-between items-center border-b pb-2 text-destructive">
        <h2 className="text-2xl font-semibold text-destructive">{title}</h2>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            status === "Available"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Main Info Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Style */}
        <div className="flex items-center gap-2">
          <Paintbrush className="w-5 h-5 " />
          <div>
            <p className="text-sm ">Style</p>
            <p className="font-medium ">{style || "Not specified"}</p>
          </div>
        </div>

        {/* Dimensions */}
        <div className="flex items-center gap-2">
          <Ruler className="w-5 h-5 " />
          <div>
            <p className="text-sm ">Dimensions</p>
            <p className="font-medium ">{dimensions}</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className=" p-4 rounded-lg space-y-3">
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 " />
          <span className="text-sm ">Pricing</span>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {/* Original Price */}
          {price && status === "Available" && (
            <div className="flex justify-between items-center">
              <span className="">Original</span>
              <span className="font-semibold">${price}</span>
            </div>
          )}

          {/* Print Price */}
          {printPrice && (
            <div className="flex justify-between items-center">
              <span className="">Print</span>
              <span className="font-semibold">${printPrice}</span>
            </div>
          )}

          {/* Giclee Price */}
          {gicleePrice && (
            <div className="flex justify-between items-center">
              <span className="">Giclée</span>
              <span className="font-semibold">${gicleePrice}</span>
            </div>
          )}

          {/* If no prices are available */}
          {!price && !printPrice && !gicleePrice && (
            <p className="text-gray-500 italic">Contact for pricing</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtworkInfo;
