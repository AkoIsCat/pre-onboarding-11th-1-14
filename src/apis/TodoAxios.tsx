import axios from "axios";

// axios 생성
export const todoAxios = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
  },
});

// update Todo List API 연결
export async function updateTodoAxios(
  id: number,
  todo: string,
  isCompleted: boolean
) {
  try {
    const res = await todoAxios.put(`/todos/${id}`, {
      todo: todo,
      isCompleted: isCompleted,
    });
    if (res.status === 200) return res;
  } catch (error: any) {
    return error;
  }
}

// delete Todo List API 연결
export async function deleteTodoAxios(id: number) {
  try {
    const res = await todoAxios.delete(`/todos/${id}`);
    if (res.status === 204) {
      const res = await getTodosList();
      return res;
    }
  } catch (error: any) {
    return error;
  }
}

// get Todo List API 연결
export async function getTodosList() {
  try {
    const res = await todoAxios.get("/todos");
    if (res.status === 200) {
      return res;
    }
  } catch (error: any) {
    return error;
  }
}

// create Todo List API 연결
export async function createTodosList(updateValue: string) {
  try {
    const res = await todoAxios.post("/todos", {
      todo: updateValue,
    });
    if (res.status === 201) return true;
  } catch (error: any) {
    return error;
  }
}
