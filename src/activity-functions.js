export const prefix = (location, prefix) => {
  return location.href.indexOf(prefix) > -1;
};

export const nav = () => {
  return true;
};

export const page1 = (location) => {
  return prefix(location, "page1");
};

export const page2 = (location) => {
  return prefix(location, "page2");
};
