import React, { Component } from "react";
import "./Cell.css";

class Cell extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = e => {
    this.props.flipCells();
  };
  render() {
    let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");
    return <td className={classes} onClick={this.handleClick} />;
  }
}

export default Cell;
