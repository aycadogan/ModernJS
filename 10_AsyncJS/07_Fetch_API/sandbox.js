// fetch API

fetch('todos/luigi.json').then(response => {
  console.log('resolved', response);
  return response.json()})
 .then( data => console.log(data))
 .catch(err => console.log(err))

 fetch('todos/mario.json').then(response => response.json())
  .then (data => {
    console.log(data);
  })
  .catch(err => console.log(error)) 

fetch('todos/shaun.json')
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))