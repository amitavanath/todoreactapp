import React, { Component } from "react";

export class ToDoItem extends Component {
 

  render() {
    const { id, name, completed } = this.props.todo;
    return (
      <div>
        <p>
          <input
            type="checkbox"
            onChange={this.props.completeToDo.bind(this, id)}
            checked={ completed ? 'checked': '' }
          />{" "}
          {name}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={{ float: "right" }}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}


export default ToDoItem;
