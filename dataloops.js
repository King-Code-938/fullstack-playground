const inventory = {
  sections: [
    {
      name: "Books",
      items: [{ title: "Bible" }, { title: "JS Guide" }]
    }
  ]
};

console.log(inventory.sections[0].items[1].title); // JS Guide
