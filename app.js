function hello() {
  console.log('Hello', this)
}
const person = {
  name: 'Maxim',
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(window), //ты биндишь контекст
  logInfo: function (job, phone) {
    console.group(`${this.name} info: `)
    console.log(`Name is ${this.name}`)
    console.log(` Age is: ${this.age}`)
    console.log(`Job is: ${job}`)
    console.log(`Phone is: ${phone}`)
    console.groupEnd()
  },
}

const lena = {
  name: 'Elena',
  age: 23,
}
// person.logInfo.bind(lena, 'Progger', '+123456789')() // меняешь констекст для this. с person на lena
// person.logInfo.call(lena, 'Progger', '+123456789') // то же что и bind, но вызов происходит сразу
// person.logInfo.apply(lena, ['Progger', '2352352353252']) //такой же, как и call, но принимает всего 2 параметра. 1 контест, 2 массив из значений
/////-------------------

const array = [1, 2, 3, 4, 5]
// const multBy = (arr, n) => arr.map((i) => i * n)
Array.prototype.multBy = function (n) {
  return this.map((i) => i * n)
}

console.log(array.multBy(3))
