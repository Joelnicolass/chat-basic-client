export const getRandomArticle = async () => {
  const response = await fetch(
    "https://es.wikipedia.org/api/rest_v1/page/random/summary"
  );

  const data = await response.json();

  return {
    title: data.title,
    extract: data.extract,
  };
};
