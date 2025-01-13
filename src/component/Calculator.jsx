import React, { useReducer } from "react";
import styled from "styled-components";

const initialState = {
  number1: "",
  number2: "",
  operator: "Operator",
  result: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NUMBER1":
      return { ...state, number1: action.payload };
    case "SET_NUMBER2":
      return { ...state, number2: action.payload };
    case "SET_OPERATOR":
      return { ...state, operator: action.payload };
    case "CALCULATE":
      const { number1, number2, operator } = state;
      let result;
      switch (operator) {
        case "+":
          result = parseFloat(number1) + parseFloat(number2);
          break;
        case "-":
          result = parseFloat(number1) - parseFloat(number2);
          break;
        case "*":
          result = parseFloat(number1) * parseFloat(number2);
          break;
        case "/":
          result =
            parseFloat(number2) !== 0
              ? parseFloat(number1) / parseFloat(number2)
              : "Error";
          break;
        default:
          result = "Change operator";
      }
      return { ...state, result };
    default:
      return state;
  }
}

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <h2>Calculator</h2>
      <input
        type="number"
        placeholder="Enter number 1..."
        value={state.number1}
        onChange={(e) =>
          dispatch({ type: "SET_NUMBER1", payload: e.target.value })
        }
      />
      <br />
      <input
        type="number"
        placeholder="Enter number 2..."
        value={state.number2}
        onChange={(e) =>
          dispatch({ type: "SET_NUMBER2", payload: e.target.value })
        }
      />
      <br />
      <select
        value={state.operator}
        onChange={(e) =>
          dispatch({ type: "SET_OPERATOR", payload: e.target.value })
        }
      >
        <option value="operator">Operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <br />
      <button onClick={() => dispatch({ type: "CALCULATE" })}>Calculate</button>
      <h3>Result: {state.result}</h3>
    </Container>
  );
}

export default Calculator;

const Container = styled.div`
  text-align: center;
  padding: 30px;
  margin: auto;
  border: 2px solid green;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  h2 {
    width: 300px;
    height: 50px;
    border-radius: 5px;
    background-color: #b3ecb3;
    margin: auto;
  }
  input {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
  }
  select {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    font-size: 16px;
  }
  button {
    padding: 7px 25px;
    background-color: #11c53b;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 19px;
  }
`;
