import React from "react";
import manzo from "../../assets/manzo.png";
import tutorial1 from "../../assets/tutorial1.svg";
import tutorial2 from "../../assets/tutorial2.svg";
import tutorial3 from "../../assets/tutorial3.svg";
import plus from "../../assets/plus.svg";
import LidModal from "./LidModal";
import BigCircle from "../BigCircle";

const BigWave = () => {
  return (
    <div className=" w-screen h-[250vh] bg-[#f15a52]  bg-[url('./src/assets/Waves.png')] bg-[50%] text-white  px-24 flex flex-col ">
      <div className="grid grid-cols-2">
        <div>
          <div className="mb-24">
            <h1 className="text-3xl font-bold mb-4">Banzai Noodles</h1>
            <h2 className="text-6xl font-semibold mb-6">Beef Flavor</h2>
          </div>
          <div>
            <img
              src={manzo}
              alt="CupNoddle"
              className="max-w-60 animate-tilt-up"
            />
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-2xl font-bold mb-4 uppercase">Preparation</h1>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-x-24 items-center mb-12">
            <div className="text-center">
              <img src={tutorial1} alt="tutorial1" className="mx-auto" />
              <p className="font-light">
                Pull the lid and pour boiling water up to the line.
              </p>
            </div>
            <div className="text-center">
              <img src={tutorial2} alt="tutorial2" className="mx-auto" />
              <p>Close the lid and wait for 3 minutes.</p>
            </div>
            <div className="text-center">
              <img src={tutorial3} alt="tutorial3" className="mx-auto" />
              <p>Stir well and enjoy your hot meal.</p>
            </div>
          </div>
          <div className="bg-[url('./src/assets/wavedivider.svg')] bg-repeat-x w-full h-2 mb-4"></div>
          <div className="flex">
            <div className="grow">
              <h3 className="text-xl font-semibold mb-2">
                Nutritional Information
              </h3>
            </div>
            <div>
              <img src={plus} alt="plus" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute  w-[1000px] top-[1400px] left-[210px]">
        <BigCircle />
      </div>

      <div className="flex justify-center items-center h-full w-full">
        <LidModal />
      </div>
    </div>
  );
};

export default BigWave;
