import React from "react";

import "./todo-item.css";

export function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed} 
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
    </div>
  );
}
