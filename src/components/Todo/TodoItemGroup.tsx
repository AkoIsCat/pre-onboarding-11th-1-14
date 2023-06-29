import { useEffect, useState } from "react";

import TodoTrans from "./TodoTrans";
//get api 호출 후 todoItem으로 보내주기
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

// todoItem  기본상태
//todoModify 수정상태
export default function TodoItemGroup() {
  const [todoItemData, setTodoItemData] = useState<TodoProps[]>([]);

  async function getTodoItemRender() {
    //const todoData = await getTodos();
    //setTodoItemData(todoData);
  }
  useEffect(() => {
    getTodoItemRender();
  }, []);

  async function deleteTodoRender(id: string) {
    //const status = await deleteTodo(id);
    // if (status.status !== 204) {
    //   alert("에러가 발생했습니다");
    //   return;
    // }
    setTodoItemData((prev) => prev.filter((todo) => todo.id !== id));
  }

  const updateCheckTodo = async (
    id: string,
    todo: string,
    isCompleted: boolean
  ) => {
    isCompleted = !isCompleted;
    // const status = await updateTodo(id, todo, isCompleted);
    // if (status.status !== 200) {
    //   alert("에러가 발생했습니다");
    //   return;
    // }
    getTodoItemRender();
  };
  return (
    <>
      {todoItemData ? (
        todoItemData.map((v, i) => (
          <div key={i}>
            <TodoTrans
              id={v.id}
              todo={v.todo}
              isCompleted={v.isCompleted}
              userId={v.userId}
              updateCheckTodo={updateCheckTodo}
              deletebutton={deleteTodoRender}
            />
          </div>
        ))
      ) : (
        <></>
      )}
    </>
  );
}
