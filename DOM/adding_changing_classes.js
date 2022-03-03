// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.remove('error')
// content.classList.add('success')

const paras = document.querySelectorAll('p')

paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error')
    }

    if(p.textContent.includes('success')){
        p.classList.add('success')
    }
})

const title = document.querySelector('.title')

title.classList.toggle('test')
//if it hasn't a class of test, we can add a class with toggle but if it has a class of test and we use toggle again, it's going to remove that class.

