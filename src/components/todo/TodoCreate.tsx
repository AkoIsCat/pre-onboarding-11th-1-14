import styled from "styled-components";
import { useRef, useState } from "react";
import { MdAdd } from "react-icons/md";

const TodoPlusBtn = styled.button.attrs((props) => ({
  title: "todo-plus-btn",
  "aria-label": "todo-plus-btn",
}))<{ $isbtnopen: string }>`
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

const TodoCreateBase = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 32px 32px 72px;
  background-color: #f1f5f9;
  border-top-color: #d4d4d8;
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  border-width: 1px;
`;

const TodoCreateInput = styled.input`
  // 공통 부분
  font-size: 100%;
  margin: 0;
  padding: 0;
  // --------
  width: 270px;
  border-color: #d4d4d8;
  border-radius: 0.125rem;
  border-width: 1px;
  height: 30px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;

const TodoCreateBtn = styled.button.attrs((props) => ({
  title: "todo-create-btn",
  "aria-label": "todo-create-btn",
}))`
  //공통 부분
  cursor: pointer;
  text-transform: none;
  //--------
  border-radius: 0.125rem;
  color: #ffffff;
  font-weight: 600;
  height: 30px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  width: 42px;
  background-color: #6ee7b7;
  &:hover {
    background-color: "#34d399";
  }
`;

const TodoCreate = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [toDoIsOpen, setToDoIsOpen] = useState(false);

  const handleToDoCreateApiClick = async () => {
    console.log((inputRef.current as HTMLInputElement).value);
    (inputRef.current as HTMLInputElement).value = "";
    /*
    const res = await todoCreateApi({todo: (inputRef.current as HTMLInputElement).value});
    if (res.status === 201 && res.ok) {
      (inputRef.current as HTMLInputElement).value = '';
      const newTodo = res.data;
      // 목록에 넣기
    } else if (!res.ok) {
      // 에러 모달? 
      console.error(res.data);
    }*/
  };

  return (
    <>
      {toDoIsOpen && (
        <TodoCreateBase>
          <TodoCreateInput
            ref={inputRef}
            placeholder="할 일 입력"
            data-testid="new-todo-input"
          />
          <TodoCreateBtn
            data-testid="new-todo-add-button"
            onClick={handleToDoCreateApiClick}
          >
            저장
          </TodoCreateBtn>
        </TodoCreateBase>
      )}
      <TodoPlusBtn
        $isbtnopen={`${toDoIsOpen}`}
        onClick={() => setToDoIsOpen(!toDoIsOpen)}
      >
        <MdAdd />
      </TodoPlusBtn>
    </>
  );
};

export default TodoCreate;
