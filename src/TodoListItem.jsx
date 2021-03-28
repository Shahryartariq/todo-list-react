import React from "react";

const TodoListItem = (props) => {
  return (
    <>
      <div className="todo__style">
        <i
          className="fa fa-times"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default TodoListItem;
