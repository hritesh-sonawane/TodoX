import React from "react";
import { connect } from "react-redux";
import {
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_ACTIVE,
} from "../constants/filters";
import Todo from "./Todo";
import Filter from "./Filter";
import styled from "styled-components";

const filteredTodos = (todos, filter) => {
  switch (filter) {
    case FILTER_ALL:
      return todos;
    case FILTER_COMPLETED:
      return todos.filter((todo) => todo.completed);
    case FILTER_ACTIVE:
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: filteredTodos(state.todos, state.filter),
    filter: state.filter,
  };
};

const List = styled.ul`
  padding-left: 0;
`;

const TodoList = ({ todos, filter }) => {
  if (todos.length === 0 && filter === FILTER_ALL)
    return (
      <div className="row flex-center margin-top-large">Nothing to display</div>
    );

  return (
    <div>
      <List className="child-borders">
        {todos.map((todo) => (
          <Todo className="row" key={todo.id} {...todo} />
        ))}
      </List>
      <Filter />
    </div>
  );
};

export default connect(mapStateToProps)(TodoList);
