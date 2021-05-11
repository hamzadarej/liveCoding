// Promise
const userStatus = new Promise((resolve, reject) => {
    let hasKids = true;
    let hasDog = undefined;
    let userName="Hadi";
    if (hasDog) {
      resolve({
        status: "User is cool",
        emoji: "😎",
      });
    } else if (hasKids) {
      resolve({
        status: "User is going crazy",
        emoji: "😅",
      });
    } else {
      reject({
        status: "User is alone",
        emoji: "🥺",
      });
    }
  });
  userStatus
    .then((obj) => {
        
      document.querySelector(
        ".result"
      ).innerHTML = `${obj.status} and he/she is ${obj.emoji}`;
    })
    .catch((err) => {
      document.querySelector(
        ".result"
      ).innerHTML = `${err.status} and he/she is ${err.emoji}`;
    });
  
  function stepOne(userName) {
    return new Promise((resolve, reject) => {
      console.log("User data being loaded");
      if (userName == "Hamza") {
        resolve("Welcome back 😊");
      } else {
        reject("Sorry IDK you");
      }
    });
  }

  
  function secondStep(response) {
    return new Promise((resolve) => {
      console.log("Still loading");
      resolve(`We have been waiting for you ${response}`);
    });
  }
  // stepOne("Zain")
  //   .then((response) => {
  //     console.log("response just arrive");
  //     return secondStep(response);
  //   })
  //   .then((secondResponse) => {
  //     console.log(secondResponse);
  //   })
  //   .catch((err) => console.log(err));
  
  // Async Await
  async function startSomething() {
    try {
      const response = await stepOne("Hamza");
      console.log("response just arrive");
      const secondResponse = await secondStep(response);
      console.log(secondResponse);
    } catch (err) {
      console.log(err);
    }
  }
  
  startSomething();

  /*callbackfuncion & promise */

  async function fetchUser(){
    let response =await fetch("https://jsonplaceholder.typicode.com/comments");
    let json =await response.json();
    console.log(json)
    let userComment="<h1>comments</h1>";
    json.forEach((obj) => {
      let{id, name, email, body}=obj;
      userComment+= `
      <div class="box" id=${id}>
      <h3>${name}</h3>
      <h5>${email}</h5>
      <p>${body}</p>
      </div>`;
      
    });
    document.querySelector(".result").innerHTML = userComment;

  }
  fetchUser()
  
  