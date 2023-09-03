import React from "react";

import { AVATAR_SIZE } from "./constants";
import styles from "./Avatar.module.css";
import AvatarNameAndSub from "./AvatarNameAndSub/AvatarNameAndSub";
import AvatarImage from "./AvatarImage/AvatarImage";

const Avatar = ({
  name,
  showName = true,
  sub = "",
  showSub = false,
  img,
  size = AVATAR_SIZE.MEDIUM,
  colorRGB = "rgb(182, 0, 218)",
  isBordered = true,
}) => {
  const getInitials = (name) => {
    return name
      .split(" ")
      .reduce((acc, name) => {
        return acc + name[0];
      }, "")
      .toUpperCase();
  };

  return (
    <div className={styles["avatar"]}>
      {img ? (
        <AvatarImage
          img={img}
          size={size}
          isBordered={isBordered}
          colorRGB={colorRGB}
        />
      ) : (
        <div
          style={{
            width: size,
            height: size,
            border: isBordered ? `2px solid ${colorRGB}` : "none",
          }}
        >
          <span>{getInitials(name)}</span>
        </div>
      )}
      <AvatarNameAndSub
        name={name}
        sub={sub}
        showName={showName}
        showSub={showSub}
      />
    </div>
  );
};

export default Avatar;
