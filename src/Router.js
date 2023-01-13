import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Todo, Todos, todoLoader } from "./User";
import { loader as todoSlugLoader } from "./User/Slug";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Something went wrong in component App</div>,
  },
  {
    path: "/users",
    element: <Todos />,
    loader: todoLoader,
    errorElement: <div>Something went wrong in component TODO</div>,
  },
  {
    path: "/users/:id",
    element: <Todo />,
    loader: todoSlugLoader,
    errorElement: <div>Something went wrong in component Slug</div>,
  },
]);
