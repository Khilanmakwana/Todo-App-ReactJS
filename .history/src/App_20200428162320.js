import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    todoList: [],
  };

  handleSubmit = (event) => {
    var taskDesc = event.target.elements.todoTask.value;
    if (taskDesc.length > 0) {
      this.setState({
        todoList: [...this.state.todoList, taskDesc],
      });
      event.target.reset();
    }
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-4">To-Do App</h1>
          </div>
        </div>
        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="todoTask"
              className="form-control"
              placeholder="Please Enter Your Task"
              autoComplete="off"
            />
            <div className="input-group-append">
              <button type="sumbit" className="btn btn-outline-success">
                Add
              </button>
            </div>
          </div>
        </form>
        <ul className="list-group">
          {this.state.todoList.map((item, index) => {
            return (
              <li className="list-group-item" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
