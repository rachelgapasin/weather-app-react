import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import ThemeSwitcher from "./ThemeSwitcher";

import "./css/Inputs.css";

function Inputs() {
  return (
    <div className="Inputs flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search for city..."
          className="text-xl font-light px-3 py-2 w-full shadow-xl rounded-lg capitalize"
        />
        <UilSearch
          size={25}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
        <ThemeSwitcher />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-xl font-light">
          °C
        </button>
        <p className="text-xl  mx-1">|</p>
        <button name="imperial" className="text-xl font-light">
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
