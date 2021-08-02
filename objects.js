const person = Object.create(
  {
    calculateAge(){
      console.log('age: ', new Date().getFullYear() - this.birthYear )
    }
  },
  {
    name: {
      value: 'Egor',
      enumerable: true,
      writable: true,
      configurable: true
    },
    birthYear: {
      value: 2003,
      writable: false,
      configurable: false,
      enumerable: false
    },
    age:{
      get(){
          return new Date().getFullYear() - this.birthYear      
        },
      set(value){
        document.body.style.background = 'red'
        console.log('set age ', value)
      }
    }
  }
)
console.log(person.age)
for (let key in person) { 
  if(person.hasOwnProperty(key)){
  console.log('Key: ', key, person[key])
  }
}
