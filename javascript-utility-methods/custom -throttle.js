function customThrottle(callback, delay) {
  let shouldWait = false;

  return function (...args) {
    if (shouldWait) return;

    callback(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}

function showMessage() {
  console.log("Function called");
}

const throttledFn = customThrottle(showMessage, 3000);

throttledFn();
