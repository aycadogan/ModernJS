// const filterInput = document.getElementById('filter')
// const todoForm = document.getElementById('todo-form')

// filterInput.addEventListener("focus",function(e){
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
// })

// todoForm.addEventListener('submit', submitForm)

// function submitForm(e){
//     console.log('submit eventi');
//     e.preventDefault()
// }

//Klavye Eventleri
// document.addEventListener("keypress",run)

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
// }

// document.addEventListener("keydown",run)

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
// }

// document.addEventListener("keyup",run)

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
// }

// const header = document.querySelector('.card-header')
// const input = document.querySelector('#todo')

// input.addEventListener('keyup', changeText)

// function changeText(e){
//     header.textContent = e.target.value
//     console.log(e.target.value);
// }

//Mouse Eventleri
// const cardBody = document.querySelectorAll('.card-body')[1]

// const title = document.querySelector('#tasks-title')

// title.addEventListener('click', run)
// title.addEventListener('mousedown', run)
// title.addEventListener('mouseup', run)
// title.addEventListener('mouseover', run)
// title.addEventListener('mouseout', run)

// cardBody.addEventListener('mouseover', run)

// cardBody.addEventListener('mouseenter',run)
// cardBody.addEventListener('mouseleave',run)

// function run(e){
//     console.log(e.type);
// }

//Input Eventleri

// const filter = document.getElementById('filter')

// document.addEventListener('DOMContentLoaded', load)

// function load(e) {
//   console.log('sayfa yuklendi')
// }

//focus
// filter.addEventListener('focus', run)
//blur - odaktan ciktiginda
// filter.addEventListener('blur', run)
//paste
// filter.addEventListener('paste', run)
//copy
// filter.addEventListener('copy', run)
//cut
// filter.addEventListener('cut', run)
//select
// filter.addEventListener('select', run)
// function run(e) {
//   console.log(e.type)
// }
//paste

//Event Bubbling
document.querySelector('.container').addEventListener('click', function () {
  console.log('div container')
})
