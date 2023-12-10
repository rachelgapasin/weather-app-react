import React, { useState } from "react";
import { toast } from "react-toastify";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import ThemeSwitcher from "./ThemeSwitcher";

import "./css/Inputs.css";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching user's location...");

      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }

    setCity("");
  };

  return (
    <div className="Inputs flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search for city..."
          className="text-md sm:text-lg md:text-xl font-light px-3 py-2 w-full shadow-xl rounded-lg capitalize"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <div
          className="cursor-pointer transition ease-out hover:scale-125"
          title="Search"
        >
          <UilSearch size={20} onClick={handleSearchClick} />
        </div>
        <div
          className="cursor-pointer transition ease-out hover:scale-125"
          title="Current location"
        >
          <UilLocationPoint size={20} onClick={handleLocationClick} />
        </div>
        <ThemeSwitcher />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl font-light transition ease-out hover:scale-125"
          title="Celsius"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl  mx-1">|</p>
        <button
          name="imperial"
          className="text-xl font-light transition ease-out hover:scale-125"
          title="Fahrenheit"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
