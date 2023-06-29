import { useState } from "react";
import styled from "styled-components";
import { Layout } from "../styles/Layout";
import { InputField } from "../components/elements/InputField";
import { Button } from "../components/elements/Button";

export const TodoList = () => {
  const [checked, setChecked] = useState(false); // 체크 상태
  const [mode, setMode] = useState(false); // 수정모드, 일반모드
  const [open, setOpen] = useState(false); // + 버튼 상태

  const checkBoxHandler = () => {
    setChecked(!checked);
  };

  const editModeHandler = () => {
    setMode(!mode);
  };

  const openHandler = () => {
    setOpen(!open);
  };

  return (
    <Layout>
      {/* TodoCrete */}
      {open && (
        <TodoCreate>
          <InputField
            placeholder="할 일 입력"
            testname="new-todo-input"
            size="lr"
            type="text"
          />
          <Button testname="new-todo-add-button" size="sm" type="submit">
            저장
          </Button>
        </TodoCreate>
      )}

      {/* + 버튼 */}
      <Button type="plus" open={open} onClick={openHandler} />

      <ul>
        {/* TodoItem */}
        {/* 수정 모드일때 */}
        {mode === true ? (
          <TodoBox>
            <InputField
              type="text"
              testname="modify-input"
              defaultValue={"공부하기"}
              size="md"
            />
            <Button testname="submit-button" type="submit" size="sm">
              제출
            </Button>
            <Button
              testname="cancel-button"
              type="delete"
              size="sm"
              onClick={editModeHandler}
            >
              취소
            </Button>
          </TodoBox>
        ) : (
          // 일반 모드일때
          <TodoBox>
            <InputField
              defaultChecked={checked}
              type="checkbox"
              onChange={checkBoxHandler}
            />
            <TodoTitle checked={checked}>공부하기</TodoTitle>
            <Button
              size="sm"
              type="edit"
              testname="modify-button"
              onClick={editModeHandler}
            >
              수정
            </Button>
            <Button size="sm" type="delete" testname="delete-button">
              삭제
            </Button>
          </TodoBox>
        )}
      </ul>
    </Layout>
  );
};

const TodoCreate = styled.div`
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
