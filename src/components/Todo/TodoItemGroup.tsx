import { useEffect, useState } from "react";
import {
  getTodosList,
  updateTodoAxios,
  deleteTodoAxios,
} from "../../apis/TodoAxios";
import TodoTrans from "./TodoTrans";
import TodoCreate from "./TodoCreate";

export interface TodoProps {
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

export default function TodoItemGroup() {
  const [todoItemData, setTodoItemData] = useState<TodoProps[]>([]);

  async function getTodoItemRender() {
    const todoData = await getTodosList();
    setTodoItemData(todoData);
  }

  useEffect(() => {
    getTodoItemRender();
  }, []);

  async function deleteTodoRender(id: string) {
    const status = await deleteTodoAxios(id);
    if (status.data === true) {
      setTodoItemData((prev) => prev.filter((todo) => todo.id !== id));
    } else {
      alert("에러입니당");
    }
  }

  const updateCheckTodo = async (
    id: string,
    todo: string,
    isCompleted: boolean
  ) => {
    const status = await updateTodoAxios(id, todo, isCompleted);
    if (status.status !== 200) {
      alert("에러가 발생했습니다");
      return;
    }
    const data = todoItemData.map((todo) => {
      return todo.id === status.data.id
        ? {
            ...todo,
            isCompleted: status.data.isCompleted,
            todo: status.data.todo,
          }
        : todo;
    });
    setTodoItemData(data);
  };

  return (
    <>
      <TodoCreate
        todoItemData={todoItemData}
        setTodoItemData={setTodoItemData}
      />
      {todoItemData &&
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
        ))}
    </>
  );
}
