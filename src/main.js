import count from './js/count'
import sum from './js/sum'
import { mul } from './js/math'
import './css/index.css'
import './less/index.less'
import './css/iconfont.css'

const countRes = count(3, 1)
const sumRes = sum(1, 2, 3)
const mulRes = mul(2, 5)
console.log(`count:${countRes}`)
console.log(`sum:${sumRes}`);
console.log(`mul:${mulRes}`);

// 判断是否支持HMR功能
if (module.hot) {
  module.hot.accept("./js/count.js");

  module.hot.accept("./js/sum.js");
}