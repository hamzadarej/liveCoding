const commentOne = document.querySelector("body").firstChild;
console.log(commentOne.nextSibling);

const commentTwo = document.querySelector("h1").nextSibling;
console.log(commentTwo.nextSibling);
const commentThree = document.querySelector("p").nextSibling;
console.log(commentThree.nextSibling);

const commentFour = document.querySelector("span").previousSibling;
console.log(commentFour.previousSibling);

const commentFive = document.querySelector("script").previousSibling;
console.log(commentFive.previousSibling);

/*easier method */

const comments = document.querySelector("html").lastChild.childNodes;
const commentsF = document.querySelector("html").firstChild.childNodes;

const commentsArr = Array.from(comments);
console.log(comments);

commentsArr.forEach((comment) => {
  if (comment.nodeType == "8") console.log(comment);
});
