import React from "react";
import "./App.css";
import Board from "./components/Board";
const App = () => {
  return (
    <div className="App">
      <Board rows={5} cols={5} />
    </div>
  );
};

export default App;
