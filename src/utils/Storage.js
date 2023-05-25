const setLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};
const getLocalStorage = (name) => {
  const result = JSON.parse(localStorage.getItem(name));
  return result;
};

export { setLocalStorage, getLocalStorage };
