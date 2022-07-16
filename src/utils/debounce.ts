export const debounce = (func: any, delay: number) => {
  let timer: NodeJS.Timeout;

  return (...args: any[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};
