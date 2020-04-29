import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid py-2">
        <div className="container">
          <h1 className="display-4">To-Do App</h1>
        </div>
      </div>
      <form className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Please Enter Your Task"
            autoComplete="off"
          />
          <div className="input-group-append">
            <button type="sumbit" className="btn btn-outline-success">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
