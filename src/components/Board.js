import React, { Component } from "react";
import "./Board.css";
import Cell from "./Cell";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    };
  }
  componentDidMount() {
    console.log(this.state.board);
  }
  createBoard = () => {
    let board = [];
    const { row, col } = this.props;
    for (let i = 0; i < row; i++) {
      let aux = [];
      for (let j = 0; j < col; j++) {
        aux.push(Math.floor(Math.random() * 2) ? true : false);
      }
      board.push(aux);
    }
    return board;
  };
  flipCells = coord => {
    console.log("COORD ", coord);
  };
  render() {
    const { board, hasWon } = this.state;
    let table = board.map((r, i) => (
      <tr key={i}>
        {r.map((c, j) => (
          <Cell
            key={`${i}-${j}`}
            isLit={c}
            flipCells={this.flipCells.bind(this, `${i}-${j}`)}
          />
        ))}
      </tr>
    ));
    return (
      <div>
        <h1>Lit-Unlit</h1>
        {!hasWon ? (
          <table className="Board">
            <tbody>{table}</tbody>
          </table>
        ) : (
          <h2>You Win!!!</h2>
        )}
      </div>
    );
  }

  static defaultProps = {
    row: 5,
    col: 5
  };
}

export default Board;
