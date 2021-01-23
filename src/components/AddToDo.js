import React, { Component } from "react";

class AddToDo extends Component {
  state = {
    name: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.name);
    this.setState({ name: "" });
  };

  onInputChange = (event) => {
    this.setState({ name: event.target.value }, () => console.log(this.state));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Add Todo..."
            value={this.state.name}
            onChange={this.onInputChange}
          />
        {' '}
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddToDo;
