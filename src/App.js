import React from "react";
import "./App.css";
import Board from "./components/Board";
const App = () => {
  return (
    <div className="App">
      <Board row={5} col={5} />
    </div>
  );
};

export default App;
