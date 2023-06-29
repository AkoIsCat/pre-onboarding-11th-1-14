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
    <div>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => updateCheckTodo(id, todo, isCompleted)}
            />
            <span id={id}>{todo}</span>
          </label>
          <button
            data-testid="modify-button"
            onClick={() => setbuttonStatus(true)}
          >
            수정
          </button>
          <button data-testid="delete-button" onClick={() => deletebutton(id)}>
            삭제
          </button>
        </li>
      </ul>
    </div>
  );
}
