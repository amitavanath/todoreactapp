import React, { Component } from "react";

import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <ToDoItem
        key={todo.id}
        todo={todo}
        deleteTodo={this.props.deleteTodo}
        completeToDo={this.props.completeToDo}
      />
    ));
  }
}

export default ToDoList;
