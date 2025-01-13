import React, { useState, useRef } from "react";

const Todo = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Text"
      />
      <button style={{backgroundColor:"gold",marginLeft:"20px",border:"none"}} onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default Todo;
