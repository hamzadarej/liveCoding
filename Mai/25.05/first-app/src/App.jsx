function App() {
  function handelSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1 className="header" id="h1">
        Hi, this is React App
      </h1>
      {console.log("Hi")}
      <h2>this is a text</h2>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="Enter your name" />
      </form>
      <img className="img" src="./img/download.jpeg" alt="big tree" />
    </div>
  );
}

export default App;
