import React from "react";
import axios from "axios";

import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

import todoapis from "../apis/todoapis";

import './App.css';

class App extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get("https://localhost:44309/api/todolist")
      .then((res) => this.setState({ todos: res.data }));
  }

  onToDoItemAddSubmit = (todoItemName) => {
    todoapis
      .post("https://localhost:44309/api/todolist", {
        name: todoItemName,
        completed: false,
      })
      .then((res) =>
        this.setState({ todos: [...this.state.todos, res.data] }, (res) =>
          console.log(res)
        )
      )
      .catch((error) => console.log(error));
  };

  deleteTodo = (id) => {
    axios
      .delete(`https://localhost:44309/api/todolist/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );
  };

  completeToDo = (id) => {
    //console.log(id);

    // var getStatus = this.state.todos.map(todo => {
    //     if(todo.id === id)
    //         return !todo.completed;
    //   })[0];

     var getStatus = this.state.todos.filter((todo) => {
        return (todo.id === id);
      })[0].completed;

    console.log(!getStatus);

    var patchData = JSON.stringify([
      {
        op: "replace",
        path: "/completed",
        value: !getStatus,
      },
    ]);

    axios.patch(
      `https://localhost:44309/api/todolist/${id}`,
      patchData,
      {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      }
    )
    .then(this.setState({
        todos: this.state.todos.map(todo => {
          if(todo.id === id)
            todo.completed = !todo.completed;
          return todo;
        })
      }));
  };

  render() {
    return (
      <div className="container">
          <div className="box">
            <AddToDo onFormSubmit={this.onToDoItemAddSubmit} />
            <ToDoList
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            completeToDo={this.completeToDo}
            />
        </div>
      </div>
    );
  }
}

export default App;
