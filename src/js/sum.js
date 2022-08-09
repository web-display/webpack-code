export default function (...arg) {
  return arg.reduce((p, c) => p + c)
}