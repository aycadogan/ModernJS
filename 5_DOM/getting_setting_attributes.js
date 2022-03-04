const link = document.querySelector('a')

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://facebook.com')
link.innerText = 'Facebook Website'

const mssg = document.querySelector('p')

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success')
mssg.setAttribute('style','color:green')

console.log(mssg.outerHTML);