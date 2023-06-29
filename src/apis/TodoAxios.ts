import AxiosInstance from "./AxiosInstance";

// update Todo List API 연결
export async function updateTodoAxios(
  id: string,
  todo: string,
  isCompleted: boolean
) {
  try {
    const res = await AxiosInstance.put(`/todos/${id}`, {
      todo: todo,
      isCompleted: isCompleted,
    });

    if (res.status === 200) return res;
  } catch (error: any) {
    return error;
  }
}

// delete Todo List API 연결
export async function deleteTodoAxios(id: string) {
  try {
    const res = await AxiosInstance.delete(`/todos/${id}`);
    if (res.status === 204) return { data: true };
  } catch (error: any) {
    return error;
  }
}

// get Todo List API 연결
export async function getTodosList() {
  try {
    const res = await AxiosInstance.get("/todos");
    return res.data;
  } catch (error: any) {
    return error;
  }
}

// create Todo List API 연결
export async function createTodosList(updateValue: string) {
  try {
    const res = await AxiosInstance.post("/todos", {
      todo: updateValue,
    });
    return res.data;
  } catch (error: any) {
    return error;
  }
}
