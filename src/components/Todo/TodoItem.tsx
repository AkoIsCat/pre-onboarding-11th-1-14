import { InputField } from "../elements/InputField";
import { Button } from "../elements/Button";
import styled from "styled-components";

const TodoBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const TodoTitle = styled.span<{ checked: boolean }>`
  width: 200px;
     ${(props) => props.checked && `color : #D4D4D8`}
`;

//data를 get으로 받아온 값을 다시 TodoItem 컴포넌트로 넘겨준다.
interface TodoProps {
  id: string;
  todo: string;
  isCompleted: boolean;
  userId: string;
  setbuttonStatus: (active: boolean) => void;
  updateCheckTodo: (id: string, todo: string, isCompleted: boolean) => void;
  deletebutton: (id: string) => void;
}

export default function TodoItem({
  id,
  todo,
  isCompleted,
  updateCheckTodo,
  setbuttonStatus,
  deletebutton,
}: TodoProps) {
  return (
    <>
      <TodoBox>
        <InputField
          defaultChecked={isCompleted}
          type="checkbox"
          onChange={() => {
            updateCheckTodo(id, todo, !isCompleted);
          }}
        />
        <TodoTitle id={id} checked={isCompleted}>
          {todo}
        </TodoTitle>
        <Button
          testname="modify-button"
          onClick={() => setbuttonStatus(true)}
          size="sm"
          type="edit"
        >
          수정
        </Button>
        <Button
          testname="delete-button"
          onClick={() => deletebutton(id)}
          size="sm"
          type="delete"
        >
          삭제
        </Button>
      </TodoBox>
    </>
  );
}
