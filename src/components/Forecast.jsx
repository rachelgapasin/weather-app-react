import React from "react";

function Forecast({ title }) {
  return (
    <section>
      <div className="flex items-center justify-start">
        <p className=" font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flow-row items-center justify-between ">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            alt="Cloudy"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            alt="Cloudy"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            alt="Cloudy"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            alt="Cloudy"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            alt="Cloudy"
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
      </div>
    </section>
  );
}

export default Forecast;
