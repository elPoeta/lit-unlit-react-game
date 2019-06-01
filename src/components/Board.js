import React, { Component } from "react";
import "./Board.css";
import Cell from "./Cell";

class Board extends Component {
  cellAround = () => {
    console.log("CLICK");
  };
  render() {
    return (
      <div>
        <h1>Lit-Unlit</h1>
        <table className="Board">
          <tbody>
            <tr>
              <Cell isLit={true} cellAround={this.cellAround} />
              <Cell isLit={false} cellAround={this.cellAround} />
              <Cell isLit={true} cellAround={this.cellAround} />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
