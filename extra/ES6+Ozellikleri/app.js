//Arrow Functions
// const merhaba = () => {
//   console.log('merhaba')
// }
// merhaba()

// const merhaba = firstname => console.log('merhaba', firstname)
// merhaba('ayca')

// const cube = (x) => {
//   return x * x * x
// }

// const cube = (x) => x * x * x
// console.log(cube(4))

//Destructing
// let number1, number2
// arr = [100, 200, 300, 400]

// number1 = arr[0]
// number2 = arr[1]

// const [number1, number2] = arr
// console.log(number1, number2)

//Obje Destructing
// const numbers = {
//   a: 10,
//   b: 20,
//   c: 30,
//   d: 40,
//   e: 50,
// }

// const { a, c, e } = numbers
// const { a: number1, c: number2, e: number3 } = numbers
// console.log(a, c, e)
// console.log(number1, number2, number3)

//Function Destructing
// const getLangs = () => ['Python', 'Java', 'C++']
// const [lang1, lang2, lang3] = getLangs()
// console.log(lang1, lang2, lang3)

// const person = {
//   name: 'Ayca Dogan',
//   year: 1989,
//   salary: 3000,
//   showInfos: () => console.log('show Infos'),
// }

// const {
//   name: isim,
//   year: yil,
//   salary: maas,
//   showInfos: bilgileriGoster,
// } = person
// console.log(isim, yil, maas)
// bilgileriGoster()

//Spread Operatoru

// const langs = ['Python', 'Java', 'C++', 'JS']
// console.log(langs[0], langs[1], langs[2], langs[3])
// console.log(...langs)

// const langs2 = ['php', 'C#', langs[0], langs[1], langs[2], langs[3]]
// const langs2 = ['php', 'C#', ...langs]
// console.log(langs2)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const [a, b, ...number2] = numbers

// console.log(a, b)
// console.log(number2)

// const addNumbers = (a, b, c) => console.log(a + b + c)
// const numbers = [100, 200, 300]
// addNumbers(numbers[0],numbers[1],numbers[2])
// addNumbers(...numbers)

//For In ve For Of
// const person = {
//   name: 'Ayca Dogan',
//   year: 1989,
//   salary: 3000,
// }
// const langs = ['Python', 'Java', 'C++', 'JS']
// const name = 'Ayca'

//For In
//Object
// for (let prop in person) {
//   console.log(prop, person[prop])
// }
//Array
// for (let index in langs) {
//   console.log(index, langs[index])
// }
//String
// for (let index in name) {
//   console.log(index, name[index])
// }
//For Of (object uzerinde gezinemezsin)(array ve string uzerinde degerlere direkt ulasma)
// for (let value of langs) {
//   console.log(value)
// }
// for (let character of name) {
//   console.log(character)
// }

//Mapler - Key - Value
// let myMap = new Map()
// const key1 = 'Ayca'
// const key2 = { a: 10, b: 20 }
// const key3 = () => 2

// myMap.set(key1, 'String Deger')
// myMap.set(key2, 'Object literal deger')
// myMap.set(key3, 'Function deger')

// console.log(myMap.get(key1))
// console.log(myMap.get(key2))
// console.log(myMap.get(key3))

// console.log(myMap)
// console.log(myMap.size)

// const cities = new Map()

// cities.set('Ankara', 5)
// cities.set('Istanbul', 15)
// cities.set('Izmir', 4)

//For Each
// cities.forEach(function (value, key) {
//   console.log(key, value)
// })

//For Of
// for (let [key, value] of cities) {
//   console.log(key, value)
// }

//Map keys
// for (let key of cities.keys()) {
//   console.log(key)
// }

//Map values
// for (let key of cities.values()) {
//   console.log(key)
// }

//Arraylerden Map Olusturma
// const array = [
//   ['key1', 'value1'],
//   ['key2', 'value2'],
// ]
// const lastMap = new Map(array)
// console.log(lastMap)

//Maplerden Array Olusturma
// const cities = new Map()

// cities.set('Ankara', 5)
// cities.set('Istanbul', 15)
// cities.set('Izmir', 4)

// const array = Array.from(cities)
// // [[],[],[]]
// console.log(array)

// Referans Tip - bellekte belli bir yeri tutan degerlerimiz
// Primitive tip - sadece o degeri tasiyan bir veri tipi

//Setler

// const myset = new Set()

// myset.add(100)
// myset.add(100)
// myset.add(3.14)
// myset.add('ayca')
// myset.add(true)
// myset.add([1, 2, 3])

// const myset2 = new Set([100, 3.14, 'ayca'])
// console.log(myset)
// console.log(myset2)
// console.log(myset.size)

// myset.delete('ayca')
// console.log(myset)

// console.log(myset.has(true))
