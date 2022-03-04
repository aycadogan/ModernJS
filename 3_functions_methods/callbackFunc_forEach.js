//callbacks & foreach

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value)
}

myFunc(function(value){
    //do something(value)
    console.log(value);
})

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// people.forEach(person => {
//     console.log(`hello ${person}`);
// })

const logPerson = (person,index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson)

const ul = document.querySelector('.people')
let html = ``;

people.forEach( person => {
    html += `<li style="color: purple">${person}</li>`;
})

console.log(html);
ul.innerHTML = html