export function capitalizeFirstLetter(string) {
  if (!string) return ''; // Handle empty or undefined strings
  return string.charAt(0).toUpperCase() + string.slice(1);
}