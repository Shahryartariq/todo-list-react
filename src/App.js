import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoLists from "./TodoLists";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemAdd = (e) => {
    setInputList(e.target.value);
  };

  const addListItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("Deleted - App");
    setItems((oldItems) => {
      return oldItems.filter((arrayElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="app">
        <div className="center__div">
          <br />
          <h1>ToDo List - Sherry</h1>
          <br />
          <div className="main__div">
            <input
              type="text"
              value={inputList}
              placeholder="Add a Item"
              onChange={itemAdd}
            />
            <button onClick={addListItem}> + </button>
            <ol>
              {/* <li>{inputList}</li> */}
              {items.map((itemValue, index) => {
                return (
                  <>
                    <TodoLists
                      text={itemValue}
                      id={index}
                      key={index + 1}
                      onSelect={deleteItems}
                    />
                  </>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
