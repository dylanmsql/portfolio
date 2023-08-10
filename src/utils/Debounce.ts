export const debounce = (fn: (..._: unknown[]) => void, delay: number) => {
  let timeoutID: ReturnType<typeof setTimeout>;
  return (...args: unknown[]) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => fn(...args), delay);
  };
};
