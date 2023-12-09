import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
    <section>
      <div className="flex flex-row items-center justify-around py-3">
        <div className="flex flex-col items-center space-y-2">
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            alt="Cloudy"
            className="w-20"
          />
          <div className="flex my-3">
            <p className=" text-3xl font-medium">Berlin, DE</p>
          </div>
          <div className="flex py-2 text-xl">
            <p>Cloudy</p>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <p className="text-5xl mb-3">34°</p>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Feels like:
            <span className="font-medium ml-1">32°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flow-row items-center justify-center space-x-2 text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">07:35 PM</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High: <span className="font-medium ml-1">45°</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1">40°</span>
        </p>
      </div>
    </section>
  );
}

export default TemperatureAndDetails;
