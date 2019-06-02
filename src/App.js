import React from "react";
import "./App.css";
import Board from "./components/Board";
import FloatButton from "./components/FloatButton";
const App = () => {
  return (
    <div className="App">
      <Board rows={5} cols={5} />
      <FloatButton />
    </div>
  );
};

export default App;
