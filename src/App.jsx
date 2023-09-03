import React from "react";
import RootProvider from "./common/providers/RootProvider";
import ChatView from "./features/chat/views/ChatView";
import LoginView from "./features/login/views/LoginView";
import { RouterProvider } from "react-router-dom";
import { router } from "./common/router/router";

const App = () => {
  return (
    <RootProvider>
      <RouterProvider router={router} />
    </RootProvider>
  );
};

export default App;
