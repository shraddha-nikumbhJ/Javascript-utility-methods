function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log("FROM CACHE");

      return cache[key];
    }

    console.log("COMPUTED");

    const result = fn(...args);

    cache[key] = result;

    return result;
  };
}

function add(a, b) {
  return a + b;
}

const memoizeAdd = memoize(add);

memoizeAdd(5, 5);
memoizeAdd(5, 5);
memoizeAdd(5, 10);
memoizeAdd(5, 5);
