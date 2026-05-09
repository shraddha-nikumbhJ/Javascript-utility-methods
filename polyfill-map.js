Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("myMap is called on null or undefined");
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i]);
    }
  }

  return result;
};

const arr = [1, 2, 3, 5];

const output = arr.myMap((item) => item * 10);

console.log(output);
