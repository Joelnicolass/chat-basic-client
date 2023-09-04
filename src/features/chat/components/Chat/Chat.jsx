import React, { useEffect, useState } from "react";

import styles from "./Chat.module.css";
import ChatBubble from "../ChatBubble/ChatBubble";

import { getLastViewFromTimestamp } from "../../../../common/utils/date.utils";
import useChat from "../../hooks/useChat";
import { getFormFields } from "../../../../common/utils/forms.utils";

import { io } from "socket.io-client";
import { getRandomArticle } from "../../../../common/services/wikipedia.services";

// socket impl

let socket = null;

const Chat = ({ user }) => {
  const { chatRef, messages, addNewMessage } = useChat();

  useEffect(() => {
    socket = io("https://chat-basic-server-production.up.railway.app/");

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.emit("joinTo", user.room, (error) => {
      if (error) {
        alert(error);
      }
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  useEffect(() => {
    socket.on("newMessage", (message) => {
      addNewMessage(message);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

  const [discussion, setDiscussion] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setDiscussion("");
      try {
        const discussion = await getRandomArticle();
        setDiscussion(discussion);
      } catch (error) {
        console.log(error);
        setDiscussion("");
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles["chat-container"]}>
      <div>
        {discussion && (
          <marquee direction="left">
            <span
              style={{
                color: "white",
                fontSize: "1rem",
                fontWeight: "Lighter",
              }}
            >
              Puedes hablar de {discussion?.title} - {discussion?.extract}
            </span>
          </marquee>
        )}
      </div>

      <div ref={chatRef} className={styles["chat"]}>
        {messages.map((message, i) => {
          const previousMessage = messages[i - 1];

          return (
            <ChatBubble
              key={message.id}
              text={message.text}
              subText={getLastViewFromTimestamp(message.date)}
              user={message.user}
              isOtherUser={message.user.id !== user.id}
              borderIndicator={
                previousMessage && previousMessage.user.id !== message.user.id
              }
              showAvatar={
                previousMessage && previousMessage.user.id !== message.user.id
              }
            />
          );
        })}
      </div>

      <hr />

      <form
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();

          const { message } = getFormFields(e);

          if (!message) {
            return;
          }

          const newMessage = {
            user,
            text: message.toString(),
          };

          socket.emit("message", newMessage);

          e.target.reset();
        }}
      >
        <input
          style={{
            width: "100%",
            padding: "0.6rem",
            border: "none",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            marginRight: "1rem",
          }}
          id="message"
          name="message"
          type="text"
          placeholder="Escribe un mensaje"
        />
        <button
          style={{
            padding: "0.6rem",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
          }}
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Chat;
