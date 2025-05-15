export const saveToLS = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
};

export const loadFromLS = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.log(err);
  }
};

export default {
  save: saveToLS,
  load: loadFromLS,
};
