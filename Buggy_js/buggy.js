const list = document.getElementById("commentList");
const countDisplay = document.getElementById("count");

function countComments() {
  const total = list.childNodes.length;
  countDisplay.innerText = total;
}

countComments();

