export function capitalizeFirstLetter(string) {
  if (!string) return ""; // Handle empty or undefined strings
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function checkEmptyValue(obj) {
  const emptyKeys = []; // To store keys with empty strings
  
  for (const key in obj) {
    if (obj[key] === "") {
      emptyKeys.push(key);
    }
  }

  return emptyKeys;
}

export function successMessage(toast, message) {
  return toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    // transition: Bounce,
  });
}

export function errorMessage(toast, message) {
  return toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    // transition: Bounce,
  });
}
