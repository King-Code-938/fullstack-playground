const list = document.getElementById("commentList");
const countDisplay = document.getElementById("count");

function countComments() {
  const total = list.children.length;
  countDisplay.innerText = total;
}

countComments();

