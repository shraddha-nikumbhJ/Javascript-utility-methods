Array.prototype.myFilter = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("function is called on null or undefined");
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i])) {
        result.push(this[i]);
      }
    }
  }

  return result;
};

const arr = [1, , 3, 5, 9];

console.log(arr.myFilter((item) => item > 3));
