import React from "react";
import lid from "../../assets/top.webp";
import BigCircle from "../BigCircle";
import { centerLabel, noodleOptions } from "./Constant";

const LidModal = (props) => {
  const { noodles } = props;
  const text = "WOK STYLE CHOWMEIN";
  const letters = text.split("");
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="flex justify-center items-center rounded-full"
          style={{
            backgroundColor: noodleOptions[noodles]?.color,
            width: "90rem",
            height: "90rem",
          }}
        >
          <div
            className="flex justify-center items-center rounded-full"
            style={{
              backgroundColor: noodleOptions[noodles]?.darkColor,
              width: "70rem",
              height: "70rem",
            }}
          >
            {letters.map((letter, index) => (
              <span
                key={index}
                className="absolute text-8xl font-bold"
                style={{
                  transform: `rotate(${
                    (360 / letters.length) * index
                  }deg) translate(25rem)`,
                  color: noodleOptions[noodles]?.titleColor,
                }}
              >
                {letter}
              </span>
            ))}
            <div
              className="flex justify-center items-center rounded-full"
              style={{
                backgroundColor: noodleOptions[noodles]?.darekestColor,
                width: "40.5rem",
                height: "40.5rem",
              }}
            >
              <img
                src={centerLabel.lid.image}
                alt="lid"
                className="m-auto w-80 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LidModal;
