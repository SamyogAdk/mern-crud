import React, { Component } from "react";
import TodoItem from "./Todo-item";
class Todo extends Component {
  state = {};
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo}></TodoItem>
    ));
  }
}

export default Todo;
