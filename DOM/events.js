
const ul = document.querySelector('ul')
// ul.remove()

const button = document.querySelector('button')

button.addEventListener('click', () => {
    console.log('you clicked me');
    const li = document.createElement('li')
    li.textContent = 'something new todo'
    // ul.append(li)
    ul.prepend(li)
})

const items = document.querySelectorAll('li')

items.forEach(item => {
    item.addEventListener('click', e => {
        // console.log('item clicked');
        // console.log(e);
        console.log(e.target);
        // console.log(item);
        // e.target.style.textDecoration = 'line-through'
        // e.target.style.color = 'red'
        e.target.remove()
    })
})

