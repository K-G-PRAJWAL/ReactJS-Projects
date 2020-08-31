import React, { Component } from "react";
import "./Node.css";

// The Node component is used to render the individual grids on the screen and handle functionalities for each of them.
// It gets the column, row, Start and Finish nodes as well as all the mouse events as props from PathFindingAlgorithm Component.
export default class Node extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row,
    } = this.props;

    // Handle the CSS for start, finish nodes and the walls by adding corresponding classnames.
    const extraClassName = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : isWall
      ? "node-wall"
      : "";

    return (
      <div
        //  Assign a particular node some CSS properties
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      ></div>
    );
  }
}
