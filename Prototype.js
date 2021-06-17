const person = new Object({
  name: 'Maxim',
  age: 25,
  greet: function () {
    console.log('Greet!')
  },
})
Object.prototype.sayHello = (ssa) => console.log('Hello!')

const lena = Object.create(person) //создаёт прототип для lena
lena.name = 'Elena'

const str = new String('I`m string ')
