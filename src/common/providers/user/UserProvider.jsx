import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    name: null,
    img: null,
    room: "global-chat",
  });

  const login = async ({ name, room }) => {
    const response = await fetch("https://cataas.com/cat?json=true");
    const data = await response.json();

    setUser({
      id: window.crypto.randomUUID(),
      name,
      img: `https://cataas.com${data.url}`,
      room: room || "global-chat",
    });
  };

  const logout = () => {
    setUser({
      id: null,
      name: null,
      img: null,
      room: "global-chat",
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
