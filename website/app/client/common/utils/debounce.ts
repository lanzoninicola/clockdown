const debounce = (fn: any, delay: number) => {
  let timeOutId: NodeJS.Timeout;
  return function (...args) {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default debounce;
