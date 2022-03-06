// rest parameter

const double = (...numbs) => {
    console.log(numbs);
    return numbs.map(num => num*2)
}

const result = double(1,3,5,6,7,7,8,8,9)
console.log(result);

/// spread syntax (arrays)
const people = ['shaun', 'ryu', 'chun-li'];
const members = ['mario', 'luigi', ...people];
console.log(members);

// spread syntax (objects)
const person = { name: 'shaun', age: 30, job: 'net ninja' };
const personClone = { ...person, location: 'manchester' };

console.log(person, personClone);
