const newListitems = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${newListitems.length}`);

newListitems.forEach((items) => {
  const title = items.querySelector(`h2`).textContent;
  const titleCount = items.querySelectorAll(`li`).length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${titleCount}`);
});
