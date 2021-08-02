// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n)
//   }
// }
// const calc = createCalcFunction(42)
// console.log(calc)
// calc()
// function createIncremenator(n) {
//   return function (num) {
//     return n + num
//   }
// }
// const addOne = createIncremenator(1)
// const addTen = createIncremenator(10)

// console.log(addTen(10))
// console.log(addTen(41))

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`
  }
}
const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

console.log(urlGenerator('com')('netflix'))

// console.log(comUrl('google'))
// console.log(comUrl('netflix'))
// console.log(ruUrl('yandex'))
// console.log(ruUrl('vk'))

function bind(person, fn) {
  return function (...args) {
    fn.apply(person, args)
  }
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
  name: 'Michael',
  age: 22,
  job: 'Frontend',
}
const person2 = {
  name: 'Michael',
  age: 22,
  job: 'Frontend',
}
bind(person1, logPerson)()
