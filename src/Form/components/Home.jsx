import React from "react";
import Logo from "/LogoLost2.png";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-purple ">
      <h1 className="text-7xl text-white font-bold mb-4 font-dancing ">
        Welcome to
      </h1>
      <img
        src={Logo}
        alt="Logo"
        className="mx-auto mb-4 pl-2 pb-12 pt-12 w-80  "
      />
      <p className="text-2xl text-white text-center font-sans">
        Welcome to the world of "Lost & Found Connect,"
        <br />a community app designed to bridge the gap
        <br /> between lost items and their owners.
      </p>
    </div>
  );
}
