import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="App mx-auto max-w-screen-md ">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />

      <Forecast title="Hourly Forecast" />
      <Forecast title="Daily Forecast" />
    </div>
  );
}

export default App;

