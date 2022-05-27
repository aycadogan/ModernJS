// Local Storage

//Set Item
// localStorage.setItem('exercise1', 'burpee')
// localStorage.setItem('set', '15')

// //Get Item
// localStorage.getItem('set')
// console.log(set)

//clear local storage
// localStorage.clear()

// const todos = ['todo1', 'todo2', 'todo3']
// // localStorage.setItem('todos', todos)
// localStorage.setItem('todos', JSON.stringify(todos))
// const value = JSON.parse(localStorage.getItem('todos'))
// console.log(value)
const form = document.getElementById('todo-form')
const todoInput = document.getElementById('todo')

form.addEventListener('submit', addTodo)

function addTodo(e) {
  const value = todoInput.value
  let todos

  if (localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }

  todos.push(value)

  localStorage.setItem('todos', JSON.stringify(todos))

  e.preventDefault()
}
