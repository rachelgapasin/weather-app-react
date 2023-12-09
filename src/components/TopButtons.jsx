import React from "react";

import "./css/TopButtons.css";

function TopButtons() {
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
    <div className="TopButtons flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="transition ease-out hover:scale-110">
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
