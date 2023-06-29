import styled from "styled-components";
import TodoCreate from "../components/todo/TodoCreate";
import TodoModify from "../components/todo/TodoModify";
import { useState } from "react";

const TodoListWrapper = styled.div`
  position: absolute;
  width: 24rem;
  height: 500px;
  border-radius: 0.5rem;
  padding: 64px 32px;
  opacity: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
`;

const TodoList = () => {
  const [_, setTest] = useState(true);
  console.log(_);
  return (
    <TodoListWrapper>
      <TodoModify id="1" data="test" checked={false} setTodoOpen={setTest} />
      <TodoCreate />
    </TodoListWrapper>
  );
};

export default TodoList;
