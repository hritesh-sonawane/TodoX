import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => dispatch(toggleTodo(id)),
  };
};

const Item = styled.li`
  padding-left: 1em;
  &:before {
    content: "";
  }
  cursor: pointer;
  overflow-wrap: break-word;
`;

const Todo = ({ id, text, completed, onItemClick }) => {
  return (
    <Item
      className={
        "padding-small margin-small " +
        (completed ? "background-primary" : "shadow shadow-hover")
      }
      key={id}
      onClick={(e) => onItemClick(id)}
      style={completed ? { textDecoration: "line-through" } : {}}
    >
      {text}
    </Item>
  );
};

export default connect(null, mapDispatchToProps)(Todo);
