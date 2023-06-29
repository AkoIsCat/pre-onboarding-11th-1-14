import { useState } from "react";

import TodoItem from "./TodoItem";

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
  deletebutton: (id: string) => void;
}

export default function TodoTrans({
  id,
  todo,
  isCompleted,
  userId,
  updateCheckTodo,
  deletebutton,
}: TodoProps) {
  const [buttonStatus, setbuttonStatus] = useState<Boolean>(false);
  return (
    <div>
      {!buttonStatus ? (
        <TodoItem
          id={id}
          todo={todo}
          isCompleted={isCompleted}
          userId={userId}
          setbuttonStatus={setbuttonStatus}
          updateCheckTodo={updateCheckTodo}
          deletebutton={deletebutton}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
