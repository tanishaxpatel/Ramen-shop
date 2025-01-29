import React from "react";
import rosy from "../../assets/rosy.png";
import spaghetti from "../../assets/spaghettiBg.svg";
import { noodleOptions } from "./Constant";

function CharterModal(props) {
  const { noodles } = props;
  return (
    <>
      <div className="h-screen flex justify-center items-center  relative">
        <h1
          style={{
            color: noodleOptions[noodles].titleColor,
            backgroundColor: noodleOptions[noodles].color,
          }}
          className="absolute z-10 text-[40vh]"
        >
          {noodleOptions[noodles].subTitle}
        </h1>
        <div className="absolute z-20 w-64 top-[20%] left-[50%] rotate-[-10deg]">
          <span className="bg-yellow-200 text-2xl">NO MAiDA</span>
          <br />
          <span className="bg-yellow-200 text-2xl">No palm oil</span>
          <br />
          <span className="bg-yellow-200 text-2xl">No added MSG</span>
        </div>
        <img src={rosy} alt="rosy" className="absolute z-20 w-64" />
      </div>
      <img src={spaghetti} alt="Spaghetti " />
    </>
  );
}

export default CharterModal;
