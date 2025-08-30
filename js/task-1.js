const categoriesList = document.querySelectorAll("#categories .item");

// 1. Вивести кількість категорій
console.log(`Number of categories: ${categoriesList.length}`);

// 2. Для кожної категорії вивести заголовок і кількість елементів
categoriesList.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
