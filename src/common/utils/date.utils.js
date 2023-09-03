export const getLastViewFromTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now - date;
  const minutesDiff = Math.floor(diff / 1000 / 60);
  const hoursDiff = Math.floor(minutesDiff / 60);
  const daysDiff = Math.floor(hoursDiff / 24);

  if (daysDiff > 0) {
    return `Visto hace ${daysDiff} días`;
  }

  if (hoursDiff > 0) {
    return `Visto hace ${hoursDiff} horas`;
  }

  if (minutesDiff > 0) {
    return `Visto hace ${minutesDiff} minutos`;
  }

  return "Visto hace unos segundos";
};
