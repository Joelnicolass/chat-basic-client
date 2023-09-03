import React, { useEffect, useRef, useState } from "react";

const useChat = () => {
  const [messages, setMessages] = useState([]);

  const chatRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [messages]);

  const addNewMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return { messages, chatRef, addNewMessage };
};

export default useChat;
