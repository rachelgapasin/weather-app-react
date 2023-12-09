import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import Time from "./components/Time";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="App mx-auto">
      <TopButtons />
      <Inputs />

      <Time />
      <TemperatureAndDetails />

      <Forecast title="Hourly Forecast" />
      <Forecast title="Daily Forecast" />
    </div>
  );
}

export default App;

