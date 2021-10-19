const log = function (txt) {
  return function () {
    console.log(txt);
  };
};

function throttle(fn, time) {
  let currentTime = new Date().getTime();
  return function (args) {
    if (currentTime && new Date().getTime() - currentTime > time) {
      fn(args);
    }
  };
}

// const throttledFn=throttle(log('am clicked to throttle'),5000);
const throttledFn = log('am clicked to throttle');

document.getElementById('btn').addEventListener('click', function () {
  console.log('hello');
  // throttledFn();
});
