import React from "react";
import lid from "../../assets/top.webp";
import BigCircle from "../BigCircle";

const LidModal = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="flex justify-center items-center rounded-full"
          style={{
            backgroundColor: "rgb(240 90 82)",
            width: "90rem",
            height: "90rem",
          }}
        >
          <div
            className="flex justify-center items-center rounded-full"
            style={{
              backgroundColor: "rgb(230 86 80)",
              width: "70rem",
              height: "70rem",
            }}
          >
            <div
              className="flex justify-center items-center rounded-full"
              style={{
                backgroundColor: "rgb(219 83 79)",
                width: "40.5rem",
                height: "40.5rem",
              }}
            >
              <img
                src={lid}
                alt="lid"
                className="m-auto w-72 object-contain"
                style={{ transform: "rotate(228deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LidModal;
