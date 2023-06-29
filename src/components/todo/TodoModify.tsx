import { Dispatch, MouseEvent, SetStateAction, useRef } from "react";
import styled from "styled-components";

const TodoModifyBase = styled.li`
  // 공통 부분
  text-align: -webkit-match-parent;
  // --------
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const TodoModifyInput = styled.input`
  // 공통 부분
  font-size: 100%;
  margin: 0;
  // --------
  border-color: #d4d4d8;
  border-radius: 0.125rem;
  border-width: 1px;
  width: 220px;
  height: 30px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;

interface TodoModifyBtnAttrs {
  title: string;
  "aria-label": string;
}

const TodoModifyBtn = styled.button.attrs<TodoModifyBtnAttrs>((props) => ({
  title: props.title,
  "aria-label": props["aria-label"],
}))<{ $types: string }>`
  // 공통 부분
  cursor: pointer;
  text-transform: none;
  font-size: 100%;
  margin: 0;
  // --------
  border-radius: 0.125rem;
  color: #ffffff;
  font-weight: 600;
  height: 30px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  width: 42px;
  background-color: ${(props) =>
    props.$types === "submit" ? "#6ee7b7" : "#F87171"};
  &:hover {
    background-color: ${(props) =>
      props.$types === "submit" ? "#34d399" : "#ef4444"};
  }
`;

interface TodoModifyProps {
  id: string;
  data: string;
  checked: boolean;
  setTodoOpen: Dispatch<SetStateAction<boolean>>;
}

const TodoModify = (props: TodoModifyProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleModifyClic = async (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.title;
    if (target === "todo-modify-cencel-btn") props.setTodoOpen(false);
    else {
      console.log((inputRef.current as HTMLInputElement).value);
      /*
      const res = await todoModifyApi(props.id, {
        todo: (inputRef.current as HTMLInputElement).value,
        isCompleted: props.checked,
      })
      if (res.status === 200 && res.ok) {
        // 목록에 넣기
        props.setTodoOpen(fasle);
      } else if (!res.ok) {
        console.error(res.data);
      }
    */
    }
  };

  return (
    <TodoModifyBase>
      <TodoModifyInput
        ref={inputRef}
        placeholder=" "
        data-testid="modify-input"
        defaultValue={props.data}
      />
      <TodoModifyBtn
        $types="submit"
        title="todo-modify-submit-btn"
        aria-label="todo-modify-submit-btn"
        data-testid="submit-button"
        onClick={handleModifyClic}
      >
        제출
      </TodoModifyBtn>
      <TodoModifyBtn
        $types="cancel"
        title="todo-modify-cencel-btn"
        aria-label="todo-modify-cencel--btn"
        data-testid="cancel-button"
        onClick={handleModifyClic}
      >
        취소
      </TodoModifyBtn>
    </TodoModifyBase>
  );
};

export default TodoModify;
