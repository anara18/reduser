// THEORY:

// 1. React
// 2. Library vs Framework
// 3. Node JS
// 4. npm
// 5. Create React App
// 6. Component
// 7. Composition
// 8. Export - Import
// 9. Reusability
// 10. JSX
// 11. Babel
// 12. Fragment
// 13. Key
// 14. Conditional Rendering
// 15. Event Handling
// 16. SPA VS MPA
// 17. Props
// 18. Lifting state up
// 19. camelCase
// 20. Hooks
// 21. useState()
// 22. Virtual DOM
// 23. styled-components
// 24. Module CSS
// 25. GIT, GITHUB
// 26. Portals
// 27. useRef()
// 28. Children
// 29. UI components

/////////////////////////❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️/////////////////////////////

// import React, { useRef, useState } from "react";
// import Modal from "./Modal";
// import ButtonUI from "./UI/ButtonUI";

// const App = () => {
//   const [isShowModal, setIsShowModal] = useState(false);
//   const inputRef = useRef(null)

//   const showModalHandler = () => {
//     setIsShowModal(true);
//   };
//   const hideModalHandler = () => {
//     setIsShowModal(false);
//   };

//   const focusInputHandler = ()=> {
//     console.log();

//   }

//   return (
//     <center>
//       <ButtonUI onClick={showModalHandler} children="Show Modal" /><br/><hr/>
//       {isShowModal && <Modal hideModalHandler={hideModalHandler} />}
//       <input ref={inputRef} placeholder="Enter your text..." type="text" /><br/> <hr/>
//       <ButtonUI onClick={focusInputHandler}>Focus Input</ButtonUI>
//     </center>
//   );
// };

// export default App;

////////////////////////////////⭐⭐⭐⭐⭐⭐⭐⭐⭐///////////////////////////////////////

import React, { Fragment, useState } from "react";
import Todo from "./component/Todo";
import Modal from "./UI/Modal";
import styled from "styled-components";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);
  const [todoDelete, setTodoDelete] = useState(null);

  const addTodo = (todo) => {
    if (todo.trim() === "") {
      alert("toltur");
    } else {
      setTodos([...todos, todo]);
      console.log(todo);
    }
  };

  const deleteHundler = (todo) => {
    setTodoDelete(todo);
    setModal(true);
  };

  const deleteValue = () => {
    setTodos(todos.filter((todo) => todo !== todoDelete));
    setModal(false);
  };

  const cancelDelete = () => {
    setModal(false);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <Todo addTodo={addTodo} />
      <Fragment>
        {todos.map((todo, index) => (
          <Show key={index}>
            {index + 1}.
            {todo}
            <button
              style={{ width: "70px", height: "20px" }}
              onClick={() => deleteHundler(todo)}
            >
              Delete
            </button>
          </Show>
        ))}
      </Fragment>
      {modal && (
        <Modal
          message="Are you sure?"
          onConfirm={deleteValue}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default App;
const Show = styled.h5`
  background-color:rgb(255, 219, 252);
  width: 400px;
  height: 60px;
  color: black;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  font-size: 20px;
  button {
    background-color:rgb(0, 255, 13);
    border: none;
    border-radius: 5px;
  }
`;

/////////////////////////⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐/////////////////////////////

// import React from 'react'
// // import Reduser from './component/Reduser'
// import Calculator from './component/Calculator'

// function App() {
//   return (
//     <div>
//       {/* <Reduser/> */}
//       <Calculator/>
//       {/* <ButtonUI/> */}
//     </div>
//   )
// }

// export default App
