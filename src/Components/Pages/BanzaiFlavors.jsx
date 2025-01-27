import React from "react";
import polloNoddle from "../../assets/polloNoddle.png";
import yellowBlob from "../../assets/square.svg";
import orangeBlob from "../../assets/redbolb.svg";
import greenBlob from "../../assets/greenblob.svg";

const BanzaiFlavors = () => {
  return (
    <div className="bg-[#f5d93f] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-16">Scopri tutti i gusti</h1>
      <div className="flex gap-36">
        {/* Flavor Card - Manzo */}
        <div className="flex flex-col items-center relative group">
          {/* Blob Background */}
          <img
            src={orangeBlob}
            alt="Red Blob"
            className="absolute w-64 h-64 -bottom-12 z-0"
          />
          <img
            src={polloNoddle}
            alt="Manzo"
            className="w-60 h-60 object-contain z-10 transform transition-transform duration-300 group-hover:-translate-y-4"
          />
          <div className="text-white font-bold py-2 px-4 mt-4 z-10 text-2xl">
            MANZO
          </div>
        </div>

        {/* Flavor Card - Pollo */}
        <div className="flex flex-col items-center relative group">
          {/* Blob Background */}
          <img
            src={yellowBlob}
            alt="Orange Blob"
            className="absolute w-64 h-64 -bottom-12 z-0"
          />
          <img
            src={polloNoddle}
            alt="Pollo"
            className="w-60 h-60 object-contain z-10 transform transition-transform duration-300 group-hover:-translate-y-4"
          />
          <div className="text-white font-bold py-2 px-4 mt-4 z-10 text-2xl">
            POLLO
          </div>
        </div>

        {/* Flavor Card - Verdure */}
        <div className="flex flex-col items-center relative group">
          {/* Blob Background */}
          <img
            src={greenBlob}
            alt="Green Blob"
            className="absolute w-64 h-64 -bottom-12 z-0"
          />
          <img
            src={polloNoddle}
            alt="Verdure"
            className="w-60 h-60 object-contain z-10 transform transition-transform duration-300 group-hover:-translate-y-4"
          />
          <div className="text-white font-bold py-2 px-4 mt-4 z-10 text-2xl">
            VERDURE
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanzaiFlavors;
