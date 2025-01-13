import React from "react";
import styled from "styled-components";

function Modal({ message, onConfirm, onCancel }) {
  const music = () => {
    const audio = new Audio("/click.wav");
    audio.play();
  };
  const handleDelete = () => {
    music();
    setTimeout(()=> {
      onConfirm();
    }, 500)
  };
  return (
    <Backdrop>
      <Content>
        <p>{message}</p>
        <Button>
          <button onClick={handleDelete}>Yes</button>
          <button style={{ marginLeft: "20px" }} onClick={onCancel}>
            No
          </button>
        </Button>
      </Content>
    </Backdrop>
  );
}

export default Modal;

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #383737;
`;
const Content = styled.div`
  padding: 3em;
  background-color: white;
  border-radius: 8px;
`;
const Button = styled.div`
  display: flex;
  justify-content: end;
  button {
    background-color: #22baf1;
    padding: 8px 20px;
    border: none;
    border-radius: 5px;
    color: white;
  }
`;
