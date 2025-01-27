import React from "react";
import rosy from "../../assets/rosy.png";
import spaghetti from "../../assets/spaghettiBg.svg";

function CharterModal() {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[#f15a52] relative">
        <h1
          style={{ color: "rgb(225, 39, 30)" }}
          className="absolute z-10 text-[40vh]"
        >
          ROSY
        </h1>
        <img src={rosy} alt="rosy" className="absolute z-20 w-64" />
      </div>
      <img src={spaghetti} alt="Spaghetti " />
    </>
  );
}

export default CharterModal;
