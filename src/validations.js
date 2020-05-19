

export const containsText = (str) => (
    typeof str === "string" && 
    str.length > 0 && 
    str.indexOf(' ') === -1
  );

export const isValidEmail = (str) => (
    typeof str === "string" && 
    str.length > 0 &&
    /^\S+@\S+[.][0-9a-z]+$/.test(str.toLowerCase())
  );