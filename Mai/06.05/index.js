const checkPromise = new Promise((resolve, reject) => {
  let x = true;
  if (x) {
    resolve("everything is good");
  } else {
    reject("sorry ,its not cool");
  }
});
checkPromise
  .then((message) => {
    console.log(`I am then and ${message}`);
  })

  .catch((err) => {
    console.log(err);
  });


  function delay(ms) {
      return new Promise((resolve)=>{
          setTimeout(()=>{
              resolve();
            },ms);
          
      }
      );
  }
  let ms =3500;
  function doSomething(){
      let text = document.querySelector(".text");
      text.innerHTML =`it took me ${ms}ms to be done.`
  }
  delay(ms).then(doSomething);

    
