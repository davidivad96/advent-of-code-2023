export const calculateHash = (step: string) => {
  let result = 0;
  for (const char of step) {
    result += char.charCodeAt(0);
    result = (result * 17) % 256;
  }
  return result;
};
