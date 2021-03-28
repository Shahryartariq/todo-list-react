import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import NewTodoItem from "./NewTodoItem";

// value clear krna ka liye after submit, value attribute set hna must ha

const NewTodoList = () => {
  const [item, setItem] = useState("");
  const [newList, setNewList] = useState([]);

  const itemEvent = (e) => {
    setItem(e.target.value);
  };

  const listOfItems = () => {
    setNewList((oldValue)=>{
        return [...oldValue, item];
    })
    setItem(" ");
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input type="text" placeholder="Add a Item" onChange={itemEvent} value={item}/>
          <Button className="newBtn" onClick={listOfItems}>
            <AddIcon />
          </Button>
          <ol>
            {/* <li>{item}</li> */}
            {newList.map((val, index) => {
              return <NewTodoItem key={index} text={val}/>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default NewTodoList;
