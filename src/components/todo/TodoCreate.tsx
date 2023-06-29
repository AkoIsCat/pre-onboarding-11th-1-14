import styled from "styled-components";
import React, { useRef, useState } from "react";
import { Button } from "../elements/Button";
import { InputField } from "../elements/InputField";
import { createTodosList } from "../../apis/TodoAxios";

interface TodoProps {
  id: string;
  todo: string;
  isCompleted: boolean;
  userId: string;
  updateCheckTodo: (
    id: string,
    todo: string,
    isCompleted: boolean
  ) => Promise<void>;
}

const TodoCreateBase = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 24rem;
  padding: 32px 32px 72px;
  background-color: #f1f5f9;
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  border-top: 1px solid #d4d4d8;
  display: flex;
  justify-content: space-between;
`;

type SetTodoItemData = (
  value: TodoProps[] | ((prevState: TodoProps[]) => TodoProps[])
) => void;

const TodoCreate = ({
  todoItemData,
  setTodoItemData,
}: {
  todoItemData: TodoProps[];
  setTodoItemData: SetTodoItemData;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [toDoIsOpen, setToDoIsOpen] = useState(false);

  const openHandler = () => {
    setToDoIsOpen(!toDoIsOpen);
  };
  const handleToDoCreateApiClick = async () => {
    const res = await createTodosList(
      (inputRef.current as HTMLInputElement).value
    );

    setTodoItemData([...todoItemData, res]);
    (inputRef.current as HTMLInputElement).value = "";
  };

  return (
    <>
      {toDoIsOpen && (
        <TodoCreateBase>
          <InputField
            placeholder="할 일 입력"
            testname="new-todo-input"
            size="lr"
            type="text"
            ref={inputRef}
          />
          <Button
            testname="new-todo-add-button"
            size="sm"
            type="submit"
            onClick={handleToDoCreateApiClick}
          >
            저장
          </Button>
        </TodoCreateBase>
      )}
      <Button type="plus" open={toDoIsOpen} onClick={openHandler} />
    </>
  );
};

export default TodoCreate;
