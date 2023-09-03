import React from "react";

import styles from "./AvatarNameAndSub.module.css";

const AvatarNameAndSub = ({
  name = "",
  showName = true,
  sub = "",
  showSub = true,
}) => {
  return (
    <div className={styles["container"]}>
      {showName && <span className={styles["name"]}>{name}</span>}

      {showSub && <span className={styles["sub"]}>{sub}</span>}
    </div>
  );
};

export default AvatarNameAndSub;
