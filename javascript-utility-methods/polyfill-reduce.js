Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError("function is called on null or undefined");
  }

  const array = this;

  let acc, startIndex;

  if (arguments.length > 1) {
    acc = initialValue;
    startIndex = 0;
  } else {
    let found = false;

    for (let i = 0; i < array.length; i++) {
      if (i in array) {
        acc = array[i];
        startIndex = i + 1;
        found = true;
        break;
      }
    }

    if (!found) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
  }

  for (let i = startIndex; i < array.length; i++) {
    if (i in array) {
      acc = callback(acc, array[i]);
    }
  }

  return acc;
};
console.log(
  ["apple", "banana", "apple", "orange", "banana", "apple"].myReduce(
    (acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;

      return acc;
    },
    {},
  ),
);
