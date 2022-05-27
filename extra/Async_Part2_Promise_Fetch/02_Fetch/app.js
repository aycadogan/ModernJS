// function getTextFile() {
//   fetch('example.txt')
//     .then((res) => res.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// }
// getTextFile()

// function getJsonFile() {
//   fetch('example.json')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// }

// getJsonFile()

// function getExternalApi() {
//   fetch('https://open.exchangerate-api.com/v6/latest')
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.rates)
//     })
//     .catch((err) => console.log(err))
// }
// getExternalApi()

//Fetch ile HTTP Requestleri

class Request {
  get(url) {
    //GET Request
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  }
  put(url, data) {
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/albums/1', {
        method: 'DELETE',
      })
        .then((res) => resolve('veri silme islemi basarili'))
        .catch((err) => reject(err))
    })
  }
}

const request = new Request()

// let albums
// request
//   .get('https://jsonplaceholder.typicode.com/albums')
//   .then((data) => {
//     albums = data
//     console.log(albums)
//   })
//   .catch((err) => console.log(err))

// request
//   .post('https://jsonplaceholder.typicode.com/albums', {
//     userId: 1,
//     title: 'Thriller',
//   })
//   .then((newAlbum) => console.log(newAlbum))

// request.put('https://jsonplaceholder.typicode.com/albums/1', {
//   userId: 10,
//   title: 'Tarkan',
// })

request
  .delete('https://jsonplaceholder.typicode.com/albums/1')
  .then((message) => console.log(message))
