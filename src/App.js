import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import { evaluate } from "mathjs";
import ClearButton from "./components/ClearButton";

function App() {
  const [calculations, setCalculations] = useState("");

  const calculationsHandler = (value) => {
    if (value === "=") {
      const result = evaluate(calculations);
      setCalculations(result);
    } else {
      setCalculations((prevCalculations) => prevCalculations + value);
    }
  };

  const resetCalculation = () => {
    setCalculations("");
  };

  return (
    <div className="app">
      <div className="wrapper">
        <Screen calculations={calculations} />
        <Buttons calculationsHandler={calculationsHandler} />
        <ClearButton resetCalculations={resetCalculation} />
      </div>
    </div>
  );
}

export default App;
