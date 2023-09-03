export const getFormFields = (e) =>
  Object.fromEntries(new window.FormData(e.target));
