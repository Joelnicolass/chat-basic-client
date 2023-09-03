import React, { useState } from "react";
import { getFormFields } from "../../../common/utils/forms.utils";
import { useAuth } from "../../../common/providers/user/UserProvider";

import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(45deg, #4000ff 30%, #5b1fff 90%)",
        color: "white",
      }}
    >
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const { name, room } = getFormFields(e);

          if (!name) {
            return;
          }

          setIsLoading(true);

          await login({
            name: name.toString(),
            room: room ? room.toString() : null,
          });

          setIsLoading(false);

          navigate("/");
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "200px",
          width: "300px",
          padding: "1rem",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <h1>CHAT RANDOM</h1>
        <input
          style={{
            width: "100%",
            padding: "0.6rem",
            border: "none",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
          }}
          type="text"
          name="name"
          id="name"
          disabled={isLoading}
          placeholder="Ingresa tu apodo"
        />

        <input
          style={{
            width: "100%",
            padding: "0.6rem",
            border: "none",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
          }}
          type="text"
          name="room"
          id="room"
          disabled={isLoading}
          placeholder="Ingresa el nombre de la sala"
        />

        <button
          style={{
            padding: "0.6rem",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            color: `${isLoading ? "rgba(255, 255, 255, 0.5)" : "white"}`,
          }}
          disabled={isLoading}
          type="submit"
        >
          <span>Entrar</span>
        </button>
      </form>
    </div>
  );
};

export default LoginView;
