import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import {
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_ACTIVE,
} from "../constants/filters";
import Todo from "./Todo";
import styled from "styled-components";

const filteredTodos = (todos, filter) => {
  switch (filter) {
    case FILTER_ALL:
      return todos;
    case FILTER_COMPLETED:
      return todos.map((todo) => todo.completed);
    case FILTER_ACTIVE:
      return todos.map((todo) => !todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: filteredTodos(state.todos, state.filter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => dispatch(toggleTodo(id)),
  };
};

const List = styled.ul`
  padding-left: 0;
`;

const TodoList = ({ todos, onTodoClick }) => {
  if (todos.length === 0)
    return <div className="row flex-center">Nothing to display.</div>;

  return (
    <List className="child-borders child-shadows-hover">
      {todos.map((todo) => (
        <Todo className="row" key={todo.id} text={todo.text} />
      ))}
    </List>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
