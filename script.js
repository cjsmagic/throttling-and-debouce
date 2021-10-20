console.log('hello');

function log(txt) {
  return function () {
    console.log(txt, new Date().getSeconds());
  };
}

/*

- need to execute first time
- need to execute next only after a delay of time after first execution
*/

function throttle(fn, time) {
  let currentTime = new Date().getTime();
  let id = null;
  return function (args) {
    const newTime = new Date().getTime();
    const diff = newTime - currentTime;
    if (diff < time && id) {
      return;
    }
    // console.log(currentTime, newTime, diff);
    currentTime = newTime;
    id = setTimeout(() => {
      fn(args);
      clearTimeout(id);
    }, time);
  };
}

/*

- clear timeout if its present and execute setTimeout,
*/

function debounce(fn, time) {
  let id = null;
  return function (args) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn(args);
      clearTimeout(id);
    }, time);
  };
}

const normalFn = log('am a normal click');
const throttledFn = throttle(log('am clicked to throttle'), 500);
const debouncedFn = debounce(log('am clicked to debounce'), 500);

document.getElementById('no').addEventListener('click', normalFn);
document.getElementById('th').addEventListener('click', throttledFn);
document.getElementById('de').addEventListener('click', debouncedFn);
