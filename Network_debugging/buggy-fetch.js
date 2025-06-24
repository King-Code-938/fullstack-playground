const output = document.getElementById("output");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    output.innerText = JSON.stringify(data, null, 2);
  })
  .catch(err => {
    output.innerText = "Error loading user info.";
    console.error(err.message);
  });

