// Callback

// document.getElementById('btn').addEventListener('click', function () {
//   console.log('tikla')
// })

// function process1(callback) {
//   setTimeout(function () {
//     console.log('process 1')
//     callback()
//   }, 3000)
// }

// function process2() {
//   setTimeout(function () {
//     console.log('process 2')
//   }, 2000)
// }

// process1(process2)

const person = {
  age: 25,
  // tellAge: function(){
  //     console.log(this.age);
  // }.bind(this)

  tellAge: () => {
    console.log(this)
    console.log(this.age)
  },
}
person.tellAge()
