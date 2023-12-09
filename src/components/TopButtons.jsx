import React, { useState } from "react";

import "./css/TopButtons.css";

function TopButtons() {
  const [isVisible, setIsVisible] = useState("hidden");

  function showCities() {
    if (isVisible === "hidden") {
      setIsVisible("flex");
    } else {
      setIsVisible("hidden");
    }
  }

  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <div className="TopButtons sm:flex my-6">
      <button
        id="btn-cities"
        className={`btn-cities ${
          isVisible === "flex" ? "active" : ""
        } sm:hidden justify-center`}
        onClick={showCities}
      >
        Default Cities
      </button>
      <div className={`city-list ${isVisible} sm:flex`}>
        {cities.map((city) => (
          <button key={city.id} className="transition ease-out hover:scale-110">
            {city.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TopButtons;
