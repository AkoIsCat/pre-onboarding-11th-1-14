import { useRef } from "react";
import { InputField } from "../elements/InputField";
import { Button } from "../elements/Button";
import { styled } from "styled-components";

const TodoBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

interface TodoModifyProps {
  id: string;
  todo: string;
  isCompleted: boolean;
  userId: string;
  setbuttonStatus: (active: boolean) => void;
  updateCheckTodo: (
    id: string,
    todo: string,
    isCompleted: boolean
  ) => Promise<void>;
}

const TodoModify = ({
  id,
  todo,
  isCompleted,
  userId,
  updateCheckTodo,
  setbuttonStatus,
}: TodoModifyProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <TodoBox>
        <InputField
          type="text"
          testname="modify-input"
          defaultValue={todo}
          size="md"
          ref={inputRef}
        />
        <Button
          testname="submit-button"
          type="submit"
          size="sm"
          onClick={() => {
            updateCheckTodo(
              id,
              (inputRef.current as HTMLInputElement).value,
              isCompleted
            );
            setbuttonStatus(false);
          }}
        >
          제출
        </Button>
        <Button
          testname="cancel-button"
          type="delete"
          size="sm"
          onClick={() => setbuttonStatus(false)}
        >
          취소
        </Button>
      </TodoBox>
    </>
  );
};

export default TodoModify;
