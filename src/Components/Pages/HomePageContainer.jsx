import React from "react";

function HomePageContainer(props) {
  const { handleClick } = props;
  return (
    <div className="mt-36 ml-36 text-white">
      <h1 className="text-8xl uppercase">Noodles</h1>
      <h2 className="text-6xl uppercase mb-8">
        With fresh Vegetables and eggs{" "}
      </h2>
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
