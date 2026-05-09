function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    const copy = [];

    for (let i = 0; i < value.length; i++) {
      copy[i] = deepClone(value[i]);
    }

    return copy;
  }

  const copy = {};

  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      copy[key] = deepClone(value[key]);
    }
  }

  return copy;
}

const obj1 = {
  name: "Abc",
  address: {
    city: "Pune",
  },
  hobbies: ["coding", "music"],
};

const obj2 = deepClone(obj1);

obj2.address.city = "Mumbai";

console.log(obj1.address.city);
console.log(obj2.address.city);
