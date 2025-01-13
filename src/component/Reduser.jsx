import React, { useReducer } from 'react'
const reduserFunc=(state,action)=>{
if (action.type==="change") {
  return {...state,user:action.payload}
}
}

function Reduser() {
  const [state,dispatch]=useReducer(reduserFunc,{user:"beka"})
  console.log(state);
   const userReducer=()=>{
    dispatch({type:"change",payload:"Nursultan"})
   }
  return (
    <div>
      <h1>{state.user}</h1>
      <button onClick={userReducer}>Click</button>


    </div>
  )
}

export default Reduser