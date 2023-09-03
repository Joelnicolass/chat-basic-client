import { createBrowserRouter } from "react-router-dom";
import ChatView from "../../features/chat/views/ChatView";
import LoginView from "../../features/login/views/LoginView";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ChatView,
  },
  {
    path: "/login",
    Component: LoginView,
  },
]);
