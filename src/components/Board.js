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

  createBoard = () => {
    let board = [];
    const { rows, cols } = this.props;
    for (let i = 0; i < rows; i++) {
      let aux = [];
      for (let j = 0; j < cols; j++) {
        aux.push(Math.floor(Math.random() * 2) ? true : false);
      }
      board.push(aux);
    }
    return board;
  };
  flipCells = coord => {
    const { rows, cols } = this.props;
    const board = this.state.board;
    const [y, x] = coord.split("-").map(Number);

    const flip = (y, x) => {
      if (x >= 0 && x < cols && y >= 0 && y < rows) {
        board[y][x] = !board[y][x];
      }
    };

    flip(y, x);
    flip(y, x - 1);
    flip(y, x + 1);
    flip(y - 1, x);
    flip(y + 1, x);

    const hasWon = board.every(row => row.every(cell => !cell));

    this.setState({ board, hasWon });
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
        {!hasWon ? (
          <div className="Board-Container">
            <h1>
              <span className="neon">Un</span>
              <span className="flux">lit</span>
            </h1>
            <table className="Board">
              <tbody>{table}</tbody>
            </table>
          </div>
        ) : (
          <div className="Board-Win">
            <h1>
              <span className="flux">You</span>
              <span className="neon">Win!!!</span>
            </h1>
          </div>
        )}
      </div>
    );
  }

  static defaultProps = {
    rows: 5,
    cols: 5
  };
}

export default Board;
