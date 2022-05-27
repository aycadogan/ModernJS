// let element

// element = document.getElementById("todo-form")
// element = document.getElementById("tasks-title")

// element = document.getElementsByClassName("list-group-item")[0]

// element = document.getElementsByTagName('div')

// element = document.querySelector('#todo-form')
// element = document.querySelector('#tasks-title')
// element = document.querySelector('.list-group-item')
// element = document.querySelectorAll('.list-group-item')

// element.forEach(el => console.log(el))

// console.log(element);

// const element = document.querySelector('#clear-todos')

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);


// Style ve Element Ozelliklerini Degistirme

// element.className = 'btn btn-primary'
// element.style.color = "#000"
// element.style.marginLeft = '20px'
// element.href = "https://www.google.com.tr"
// element.target = '_blank'
// element.textContent = 'SIL'
// element.innerHTML = "<span style='color:green'>SILIN</span>"

// const elements = document.querySelectorAll(".list-group-item")
// elements.forEach(el=> {
//     el.style.color = "red"
//     el.style.background = "#eee"
// })

//DOM Elementleri Uzerinde Gezinme

// let value

// const todoList = document.querySelector('.list-group')
// const todo = document.querySelector(".list-group-item:nth-child(2)")
// const cardrow  = document.querySelector('.card.row')

// value = todoList
// value = todo
// value = cardrow

// //Child Nodes - text dahil
// value = todoList.childNodes
// value = todoList.childNodes[0]

// //Children - element
// value = todoList.children
// value = todoList.children[todoList.children.length-1]
// value = todoList.children[2].textContent= 'degisti'

// value = cardrow
// value = cardrow.children
// value = cardrow.children[2].children[1].textContent = 'Burasida degisti'

// value = todoList.firstElementChild
// value = todoList.lastElementChild
// value = todoList.children.length

// value = cardrow
// value = cardrow.parentElement
// value = cardrow.parentElement.parentElement

// value = todo
// value = todo.previousElementSibling
// value = todo.nextElementSibling

// console.log(value);



//Dinamik Element Olusturma

{/* <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>                */}

// const newLink = document.createElement("a")
// const cardbody= document.getElementsByClassName('card-body')[1]

// newLink.id = 'clear-todos'
// newLink.className='btn btn-danger'
// newLink.href = "https://www.google.com.tr"
// newLink.target = '_blank'

// newLink.appendChild(document.createTextNode('Farkli Sayfaya git'))

// cardbody.appendChild(newLink)

// console.log(newLink);


// Dinamik Element Silme

// const todoList = document.querySelector('ul.list-group')
// const todos = document.querySelectorAll('li.list-group-item')

// // todos[1].remove()

// // todoList.removeChild(todoList.lastElementChild)
// todoList.removeChild(todos[2])

// console.log(todos);
// console.log(todoList);


// Elementleri Degistirme - REPLACE

// const cardbody= document.querySelectorAll('.card-body')[1]
// const newElement = document.createElement('h3')

// newElement.className = "card-title"
// newElement.id='tasks-title'
// newElement.textContent='Yeni Todolar'

// const oldElement = document.querySelector('#tasks-title')

// cardbody.replaceChild(newElement, oldElement)

// console.log(newElement);
// console.log(cardbody);


// Dinamik Attribute Degistirme, Silme, Ekleme

const todoInput = document.getElementById('todo')
let element 

element = todoInput
element = todoInput.classList

todoInput.classList.add('newClass')
// todoInput.classList.add('newClass2')
// todoInput.classList.remove('newClass')

element = todoInput.placeholder
element = todoInput.getAttribute('placeholder')
todoInput.setAttribute('placeholder', "naber")
todoInput.setAttribute('title', 'input')
todoInput.removeAttribute('name')
element = todoInput.hasAttribute('name')

element = todoInput
console.log(element);