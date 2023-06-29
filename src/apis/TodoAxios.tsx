import axios from "axios";

// axios 생성
const todoAxios = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
  },
});

todoAxios.interceptors.request.use(
  async (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
    return config;
  },
  async (error) => {
    console.log("에러발생", error);
    return Promise.reject(error);
  }
);

todoAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// update Todo List API 연결
export async function updateTodoAxios(
  id: string,
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
export async function deleteTodoAxios(id: string) {
  try {
    const res = await todoAxios.delete(`/todos/${id}`);
    if (res.status === 204) return { data: true };
  } catch (error: any) {
    return error;
  }
}

// get Todo List API 연결
export async function getTodosList() {
  try {
    const res = await todoAxios.get("/todos");
    return res.data;
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
    return res.data;
  } catch (error: any) {
    return error;
  }
}
