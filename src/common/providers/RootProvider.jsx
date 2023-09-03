import React from "react";
import { UserProvider } from "./user/UserProvider";

const RootProvider = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default RootProvider;
