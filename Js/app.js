// function getData(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (typeof data === "string") {
//         // POSITIVE
//         resolve(data);
//       } else {
//         // NEGATIVE
//         reject("Lütfen string bir değer girin");
//       }
//     }, 5000);
//   });
// }

// getData(1)
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

/*
function addTwo(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number === "number") {
        resolve(number + 2);
      } else {
        reject(new Error("Lütfen bir sayı girin"));
      }
    }, 3000);
  });
}

addTwo("10")
  .then((response) => {
    console.log(response);
    return response + 2;
  })
  .then((response2) => {
    console.log(response2);
  })
  .catch((err) => console.log(err));
*/

// function getTextFile() {
//   fetch("/example.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// function getJSONFile() {
//   fetch("/example.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

//getTextFile();
// getJSONFile();

// function getExternalAPI() {
//   fetch("https://61c58dd1c003e70017b79794.mockapi.io/api/todos")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getExternalAPI();

class Request {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => resolve("Veri silindi!!"))
        .catch((err) => reject(err));
    });
  }
}

const request = new Request();
// let albums;

// request
//   .get("https://61c58dd1c003e70017b79794.mockapi.io/api/todos")
//   .then((data) => {
//     albums = data;
//     console.log(albums);
//   })
//   .catch((err) => console.log(err));

// request
//   .post("https://61c58dd1c003e70017b79794.mockapi.io/api/todos", {
//     id: 21,
//     todoText: "This is a test",
//   })
//   .then((newAlbum) => console.log(newAlbum))
//   .catch((err) => console.log(err));

// request
//   .put("https://61c58dd1c003e70017b79794.mockapi.io/api/todos/15", {
//     id: 15,
//     todoText: "This todoText updated",
//   })
//   .then((album) => console.log(album))
//   .catch((err) => console.log(err));

request
  .delete("https://61c58dd1c003e70017b79794.mockapi.io/api/todos/1")
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
