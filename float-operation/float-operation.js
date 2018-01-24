//unexpect result
console.log('0.1 + 0.2 = ', 0.1 + 0.2)

//how to overcome
const precision = 10
const numberA = 0.1 * precision
const numberB = 0.2 * precision
console.log('0.1 + 0.2 = ', (numberA + numberB) / precision)