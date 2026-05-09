function customDebounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function searchAPI(value) {
  console.log("API CALL:", value);
}

const debouncedSearch = customDebounce(searchAPI, 1000);

debouncedSearch("h");
debouncedSearch("he");
debouncedSearch("hel");
debouncedSearch("hello");
