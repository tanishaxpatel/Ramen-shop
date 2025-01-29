import React from "react";

import { noodleOptions } from "./Constant";

const BanzaiFlavors = (props) => {
  const { noodles, setNoodles } = props;
  // Filter out the selected noodle from the options
  const filteredNoodles = Object.entries(noodleOptions).filter(
    ([key]) => key.toLowerCase() !== noodles.toLowerCase()
  );
  console.log(filteredNoodles);
  const handleClick = (color) => {
    console.log(color);

    setNoodles(color);
  };

  return (
    <div className="bg-[#f5d93f] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-16">DID YOU MISS ADDING THESE?</h1>
      <div className="flex gap-36">
        {filteredNoodles.map(
          ([key, { image, color, title, subTitle, blob }]) => (
            <div
              key={key}
              className="flex flex-col items-center relative group"
              onClick={() => {
                handleClick(key);
              }}
            >
              {/* Blob Background */}
              <img
                src={blob}
                alt="Green Blob"
                className="absolute w-64 h-64 -bottom-12 z-0"
              />
              {/* Noodle Image */}
              <img
                src={image}
                alt={subTitle}
                className="w-60 h-60 object-contain z-10 transform transition-transform duration-300 group-hover:-translate-y-4"
              />
              {/* Title and Subtitle */}
              <div className="text-white font-bold py-2 px-4 mt-4 z-10 text-2xl">
                {subTitle}
              </div>
              {/* <div className="text-white font-medium mt-2 z-10">{subTitle}</div> */}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BanzaiFlavors;
