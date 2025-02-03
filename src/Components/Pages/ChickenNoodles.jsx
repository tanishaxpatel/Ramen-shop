import React, { useState } from "react";
import Hero from "./Hero";
import BigWave from "./BigWave";
import CharterModal from "./CharterModal";
import BanzaiFlavors from "./BanzaiFlavors";
import { noodleOptions } from "./Constant";

function ChickenNoodles() {
  // const [color, setColor] = useState("#f15a52");
  const [noodles, setNoodles] = useState("red");
  return (
    <div
      className=" overflow-x-hidde border-[60px] border-black  rounded-xl  box-border"
      style={{ backgroundColor: noodleOptions[noodles]?.color }}
    >
      <Hero noodles={noodles} />
      <BigWave noodles={noodles} />
      <CharterModal noodles={noodles} />
      <BanzaiFlavors noodles={noodles} setNoodles={setNoodles} />
    </div>
  );
}

export default ChickenNoodles;
