const fetchJson = () => {
  fetch("./date.json")
    .then((response) => response.json())
    .then((json) => {
      let userList = "<h2>All users <h2/>";
      json.forEach((user) => {
        let { id, name, age, city, photo } = user;
        userList += `<div id=${id}>
        <div>${photo}</div>
        ${name},<span>${age}</span> old , and I live in <span>${city}</span>

         </div>`;
      });
      document.querySelector(".result").innerHTML = userList;
    })
    .catch((err) => console.log(err));
};
function fetchApiPhotos() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let userCard = "<h2>Images API response </h2>";
      data.forEach((img) => {
        let { id, title, url, thumbnailUrl } = img;
        userCard += `
          <div id=${id}>
          <img src=${thumbnailUrl} >
          <h3>${title}</h3>
          <img src=${url} alt=${title}>
          </div>
          `;
      });
      document.querySelector(".result").innerHTML = userCard;
    })
    .catch((err) => console.log(err));
}

function fetchApiCommentS() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let userInfo = "<h1>Comments API response </h1>";
      data.forEach((comment) => {
        let { id, name, email, body } = comment;
        userInfo += `
          <div class="box" id=${id}>
          <h3>${name}</h3>
          <h5>${email}</h5>
          <p>${body}</p>
          </div>
          `;
      });
      document.querySelector(".result").innerHTML = userInfo;
    })
    .catch((err) => console.log(err));
}
