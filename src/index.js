import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Admin,
  AdminAccountDetail,
  Home,
  Login,
  NotFoundPage,
  Signup,
  Test,
} from "./pages";
import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./pages/test";
import TestContext from "./pages/test/Context";
import { UserProvider } from "./providers/user-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin/*",
    element: <Admin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/account/:id",
    element: <AdminAccountDetail />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
