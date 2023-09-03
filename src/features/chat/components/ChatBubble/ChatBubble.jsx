import React from "react";
import Avatar from "../../../../common/components/Avatar/Avatar";

import styles from "./ChatBubble.module.css";

const getAvatarContainerStyles = (isOtherUser) => {
  return {
    style: {
      display: "flex",
      justifyContent: isOtherUser ? "flex-start" : "flex-end",
    },
  };
};

const getBubbleStyles = (isOtherUser, borderIndicator) => {
  return {
    style: {
      display: "flex",
      justifyContent: isOtherUser ? "flex-start" : "flex-end",
      padding: "1rem",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: `
    ${
      borderIndicator
        ? isOtherUser
          ? "0px 20px 20px 20px"
          : "20px 0px 20px 20px"
        : "20px 20px 20px 20px"
    }`,
      border: "1px solid rgba(255, 255, 255, 0.18)",
    },
  };
};

const ChatBubble = ({
  text,
  user,
  subText = "",
  isOtherUser = false,
  showAvatar = true,
  borderIndicator = true,
}) => {
  return (
    <div className={styles["container"]}>
      {showAvatar && (
        <div {...getAvatarContainerStyles(isOtherUser)}>
          <Avatar
            name={!isOtherUser ? "Tú" : user.name}
            img={user.img}
            sub={subText}
            showSub
          />
        </div>
      )}

      <div {...getBubbleStyles(isOtherUser, borderIndicator)}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
