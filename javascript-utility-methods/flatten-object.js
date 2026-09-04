function flattenObject(obj) {
  let parentKey = "",
    result = {};

  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

const obj = {
  user: {
    name: "Abc",
    address: {
      city: "Pune",
    },
  },
};

console.log(flattenObject(obj));
