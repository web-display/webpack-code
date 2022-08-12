import count from './js/count'
import sum from './js/sum'
// import { mul } from './js/math'
import './css/index.css'
import './less/index.less'
import './css/iconfont.css'

const countRes = count(3, 1)
const sumRes = sum(1, 2, 3)
console.log(`count:${countRes}`)
// var a = 2
console.log(`sum:${sumRes}`);

document.getElementById('btn').onclick = function () {
  import(/* webpackChunkName: "math" */'./js/math').then(({ mul }) => {
    console.log(mul(2, 7));
  })
}
const promise = Promise.resolve();
promise.then(() => {
  console.log("hello promise");
});

// 判断是否支持HMR功能
if (module.hot) {
  module.hot.accept("./js/count.js");

  module.hot.accept("./js/sum.js");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}