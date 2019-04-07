const POLL_DELAY = 1000;

// Used to stop the API being hit too often.
const throttle = func => (...args) => new Promise((resolve) => {
  setTimeout(() => resolve(func(...args)), POLL_DELAY);
});

module.exports = {
  throttle,
};

