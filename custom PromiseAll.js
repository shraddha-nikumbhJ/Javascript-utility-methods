function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)

        .then((data) => {
          results[index] = data;

          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })

        .catch((error) => {
          reject(error);
        });
    });
  });
}

const p1 = new Promise((r) => setTimeout(() => r("A"), 3000));
const p2 = Promise.resolve("B");

customPromiseAll([p1, p2])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
