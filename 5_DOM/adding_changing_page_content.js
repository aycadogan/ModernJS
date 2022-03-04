//Add a new text to HTML Page

const para = document.querySelector('p')

console.log(para.innerText);
parseFloat.innerText = 'ninjas are awesome'

const paras = document.querySelectorAll('p')

paras.forEach( para => {
    console.log(para.innerText);
    para.innerText += ' new text'
})

//Change the HTML inside it

const content = document.querySelector('.content')

console.log(content.innerHTML);
content.innerHTML += '<h2>THIS IS A NEW H2</h2>'

const people = ['luigi', 'mario', 'yoshi']

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})