import React from "react";

import styles from "./ChatView.module.css";
import bg from "../../../assets/bg.jpg";
import ChatBubble from "../components/ChatBubble/ChatBubble";
import Chat from "../components/Chat/Chat";
import { useAuth } from "../../../common/providers/user/UserProvider";

import { Navigate } from "react-router-dom";

const getBackground = () => {
  return {
    style: {
      backgroundImage: `url(${bg})`,
    },
  };
};

const ChatView = () => {
  const { user } = useAuth();

  if (!user.name) {
    return <Navigate to="/login" />;
  }

  return (
    <main className={styles["container"]} {...getBackground()}>
      <Chat user={user} />
    </main>
  );
};

export default ChatView;
