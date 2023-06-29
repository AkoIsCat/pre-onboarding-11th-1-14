import styled from "styled-components";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

const TodoPlusBtn = styled.button<{ $isbtnopen: string }>`
  // 공통 부분
  cursor: pointer;
  text-transform: none;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
  // -----------
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: ${(props) =>
    props.$isbtnopen === "false"
      ? "translate(-50%, 50%)"
      : "translate(-50%, 50%) rotate(45deg)"};
  width: 80px;
  height: 80px;
  border-radius: 9999px;
  font-size: 60px;
  color: rgb(255 255 255);
  background-color: ${(props) =>
    props.$isbtnopen === "false" ? "#6ee7b7" : "#f87171"};
  transition-duration: 0.1s;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  z-index: 10;
  &:hover {
    background-color: ${(props) =>
      props.$isbtnopen === "false" ? "#34d399" : "#ef4444"};
  }
`;

const TodoCreate = () => {
  const [toDoIsOpen, setToDoIsOpen] = useState(false);

  return (
    <TodoPlusBtn
      $isbtnopen={`${toDoIsOpen}`}
      onClick={() => setToDoIsOpen(!toDoIsOpen)}
    >
      <MdAdd />
    </TodoPlusBtn>
  );
};

export default TodoCreate;
