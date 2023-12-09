import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function Time({ weather: { dt, timezone } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="sm:text-xl">{formatToLocalTime(dt, timezone)}</p>
      </div>
    </div>
  );
}

export default Time;
