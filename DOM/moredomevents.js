const copy = document.querySelector('.copy-me')

copy.addEventListener('copy', () => {
    console.log('my content is copyright');
})

// Track the position of the cursor on your web page
const box = document.querySelector('.box')

box.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `x position - ${e.offsetX} y position - ${e.offsetY}`
})

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
})

//https://developer.mozilla.org/en-US/docs/Web/Events#Mouse_events