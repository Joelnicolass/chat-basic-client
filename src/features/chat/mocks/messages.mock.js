const MOCK_MESSAGES = [
  {
    id: window.crypto.randomUUID(),
    text: "Hola, ¿cómo estás?",
    user: {
      id: 1,
      name: "Jorge",
      img: "https://i.pravatar.cc/150?img=69",
    },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: window.crypto.randomUUID(),
    text: "Me olvidé de pedirte el link de la reunión",
    user: {
      id: 1,
      name: "Jorge",
      img: "https://i.pravatar.cc/150?img=69",
    },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: window.crypto.randomUUID(),
    text: "Hola, ¿cómo estás?",
    user: {
      id: 2,
      name: "Matias",
      img: "https://i.pravatar.cc/150?img=8",
    },
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
];
