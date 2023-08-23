const listOfCategories = document.querySelectorAll("#categories .item");
const numberOfCategories = listOfCategories.length;
console.log(`Number of categories: ${numberOfCategories}`);
listOfCategories.forEach((category) => {
    const nameOfCategory = category.querySelector("h2").textContent;
    const listOfElements = category.querySelectorAll("ul li");
    const numberOfElements = listOfElements.length;
    console.log(`Category: ${nameOfCategory}`);
    console.log(`Elements: ${numberOfElements}`);
}); 