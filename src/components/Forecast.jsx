import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items }) {
  return (
    <section>
      <div className="flex items-center justify-start">
        <p className=" font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flow-row items-center justify-between ">
        {items.map((item) => (
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              alt={item.details}
              className="w-12 my-1"
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Forecast;
