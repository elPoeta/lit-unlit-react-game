import React from "react";
import "./App.css";
import Board from "./components/Board";
const App = () => {
  return (
    <div className="App">
      <h1>
        <span className="">Un</span>
        <span className="">lit</span>
      </h1>
      <Board rows={5} cols={5} />
    </div>
  );
};

export default App;
