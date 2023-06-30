import { InputField } from '../elements/InputField';
import { Button } from '../elements/Button';
import { TodoItemProps, TodoBox, TodoTitle } from './Todo.style';

//data를 get으로 받아온 값을 다시 TodoItem 컴포넌트로 넘겨준다.
// interface TodoProps {
//   id: string;
//   todo: string;
//   isCompleted: boolean;
//   userId: string;
//   setbuttonStatus: (active: boolean) => void;
//   updateCheckTodo: (id: string, todo: string, isCompleted: boolean) => void;
//   deletebutton: (id: string) => void;
// }

export default function TodoItem({
  id,
  todo,
  isCompleted,
  updateCheckTodo,
  setbuttonStatus,
  deletebutton,
}: TodoItemProps) {
  return (
    <>
      <TodoBox>
        <InputField
          defaultChecked={isCompleted}
          type='checkbox'
          onChange={() => {
            updateCheckTodo(id, todo, !isCompleted);
          }}
        />
        <TodoTitle id={id} checked={isCompleted}>
          {todo}
        </TodoTitle>
        <Button
          testname='modify-button'
          onClick={() => setbuttonStatus(true)}
          size='sm'
          type='edit'>
          수정
        </Button>
        <Button testname='delete-button' onClick={() => deletebutton(id)} size='sm' type='delete'>
          삭제
        </Button>
      </TodoBox>
    </>
  );
}
