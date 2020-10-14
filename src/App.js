import React, { Component } from "react";
import Todo from "./components/Todo";
import "./App.css";
class App extends Component {
  state = {
    todos: [
      {
        title: "item 1",
        id: 1,
      },
      {
        title: "item 2",
        id: 2,
      },
    ],
  };
  render() {
    return <Todo todos={this.state.todos}></Todo>;
  }
}

export default App;
