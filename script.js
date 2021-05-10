async function getRandomMeal() {
    const randomMeal = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const randomMealResult = await randomMeal.json();
    const randomMealData = randomMealResult.meals[0];
    console.log(randomMealData);
    loadRandomMeal(randomMealData);
}

function loadRandomMeal(randomMealData) {
    let randomMealImage = document.querySelector('.meal-image');
    randomMealImage.setAttribute('src', `${randomMealData.strMealThumb}`);
    let randomMealName = document.querySelector('.meal-name');
    randomMealName.innerHTML = randomMealData.strMeal;
}

async function getMealById(id) {
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);

}

async function getMealBySearch(term) { fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term); }

getRandomMeal();