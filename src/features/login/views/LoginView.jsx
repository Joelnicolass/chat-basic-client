import React, { useState } from "react";
import { getFormFields } from "../../../common/utils/forms.utils";
import { useAuth } from "../../../common/providers/user/UserProvider";

import { motion } from "framer-motion";

import bg from "../../../assets/bg.jpg";
import icon from "../../../assets/icon.png";

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
        color: "white",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
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
            border: "1px solid rgba(255, 255, 255, 0.18)",
            backdropFilter: "blur(20px)",
            background: "rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            maxHeight: "400px",
            maxWidth: "400px",
            width: "100%",
            height: "100%",
            padding: "1rem",
            borderRadius: "20px",
          }}
        >
          <marquee
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <motion.div
              animate={{
                filter: [
                  "hue-rotate(0deg)",
                  "hue-rotate(360deg)",
                  "hue-rotate(0deg)",
                ],

                transition: { duration: 2, repeat: Infinity },
              }}
            >
              <img
                src={icon}
                style={{
                  width: "80px",
                  height: "80px",
                }}
              />
            </motion.div>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                webkitTextFillColor: "transparent",
                webkitTextStrokeWidth: "1px",
                fontFamily: "Roboto, sans-serif",
                textShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
                background: "linear-gradient(45deg, #5537ff 30%, #de37ff 90%)",
                webkitBackgroundClip: "text",
                //webkitTextStrokeColor: "transparent",
              }}
            >
              RANDOM CHAT!
            </h1>
          </marquee>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <motion.div
              initial={{ opacity: 0, translateY: 100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, translateY: 100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
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
            </motion.div>
          </div>

          <motion.div
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
            //hover
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.5)",
              borderRadius: "20px",
              transition: { duration: 0.2 },
            }}
          >
            <button
              style={{
                padding: "0.6rem",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                color: `${isLoading ? "rgba(255, 255, 255, 0.5)" : "white"}`,
                cursor: `${isLoading ? "not-allowed" : "pointer"}`,
                width: "100%",
              }}
              disabled={isLoading}
              type="submit"
            >
              <span>COMENZAR</span>
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginView;
