import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import TodoList from "./pages/TodoList";
import Root from "./pages/Root";

// singin, sinup, todo조건에 따른 페이지 이동 및 유지
function LogInOutCheck(data: string) {
  return new Promise((reslove, _) => {
    const status = !localStorage.getItem("access_token") ? false : true;
    if ((data === "sign" && status) || (data === "todo" && !status))
      reslove(true);
    reslove(false);
  });
}

// 라우터 정보
const routerElement = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp />,
        loader: async () => {
          const status = await LogInOutCheck("sign");
          if (status === true) return redirect("/todo");
          return true;
        },
      },
      {
        path: "signin",
        element: <SignIn />,
        loader: async () => {
          const status = await LogInOutCheck("sign");
          if (status === true) return redirect("/todo");
          return true;
        },
      },
      {
        path: "todo",
        element: <TodoList />,
        loader: async () => {
          const status = await LogInOutCheck("todo");
          if (status === true) return redirect("/signin");
          return true;
        },
      },
    ],
  },
]);

export default function Routers() {
  return <RouterProvider router={routerElement} />;
}
