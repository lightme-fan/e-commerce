export function capitalizeFirstLetter(string) {
  if (!string) return ''; // Handle empty or undefined strings
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export  function checkEmptyValue(obj) {
  const emptyKeys = []; // To store keys with empty strings

  for (const key in obj) {
      if (obj[key] === "") {
          emptyKeys.push(key);
      }
  }

  return emptyKeys;
}