const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('li.item');

const totalCategories = categoryItems.length;
console.log(`Number of categories: ${totalCategories}`);


categoryItems.forEach((categoryItem) => {
  
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  
  const categoryElements = categoryItem.querySelectorAll('ul li');

  const totalElementsInCategory = categoryElements.length;

  console.log(`Category: ${categoryTitle}` );
  console.log(`Elements: ${totalElementsInCategory} ` );
});