import React from "react";
import logo from "../../assets/woktok-logo.svg";

function HomePageContainer(props) {
  const { handleClick } = props;
  return (
    <div className="mt-36 ml-36 text-white">
      <img
        src={logo}
        alt="logo"
        className="absolute top-0 left-0 m-4 w-24 h-auto"
      />
      <h1 className="text-8xl uppercase">Noodles</h1>
      <h2 className="text-6xl uppercase mb-8">Wok Tok Instant Noodles</h2>
      {/* <hr className=" mb-8" /> */}
      <p className="mb-4">
        A perfect blend of spices that brings a punch of favourite flavor – your
        go-to for a quick and tasty fix!
      </p>
      <button
        className="bg-purple-600 text-white px-6 py-2 rounded-xl text-lg shadow-md hover:bg-purple-700 transition "
        onClick={handleClick}
      >
        Choose Your Noodle
      </button>
    </div>
  );
}

export default HomePageContainer;
