import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    name,
    country,
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <section>
      <div className="sm:flex flex-row items-center justify-around py-3">
        <div className="flex flex-col items-center space-y-2">
          <img src={iconUrlFromCode(icon)} alt={details} className="w-20" />
          <div className="flex my-3">
            <p className=" text-3xl font-medium">{`${name}, ${country}`}</p>
          </div>
          <div className="flex py-2 text-xl">
            <p>{details}</p>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <p className="text-5xl m-3">{`${temp.toFixed()}°`}</p>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Feels like:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flow-row items-center justify-center space-x-2 text-sm py-3">
        <div className="sm:flex items-center border-gray-500 border-r-2 pr-2">
          <UilSun className="m-auto" />
          <p className="font-light mx-1">
            Rise:{" "}
            <span className="font-medium">
              {formatToLocalTime(sunrise, timezone, "h:mm a")}
            </span>
          </p>
        </div>

        <div className="sm:flex items-center border-gray-500 border-r-2 pr-2">
          <UilSunset className="m-auto" />
          <p className="font-light mx-1">
            Set:{" "}
            <span className="font-medium ml-1">
              {formatToLocalTime(sunset, timezone, "h:mm a")}
            </span>
          </p>
        </div>

        <div className="sm:flex items-center border-gray-500 border-r-2 pr-2">
          <UilSun className="m-auto" />
          <p className="font-light mx-1">
            High:{" "}
            <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
          </p>
        </div>

        <div className="sm:flex items-center">
          <UilSun className="m-auto" />
          <p className="font-light mx-1">
            Low:{" "}
            <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default TemperatureAndDetails;
