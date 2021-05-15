const meals = document.getElementById("meals");

function getMealsFromLS(){
    const mealIds = JSON.parse(localStorage.getItem("mealIds"));
    console.log("ce");
    console.log(localStorage.getItem("mealIds"));
    console.log(mealIds);
    console.log(mealIds);

    return mealIds === null ? [] : mealIds;
}

function removeMealFromLS(mealId){
    console.log("asdasdasd");
    const mealIds = localStorage.getItem("mealIds");
    localStorage.setItem("mealIds",JSON.stringify(mealIds.filter((id) => id != mealId)));
}    

function addMealToLS(mealId){

    const mealIds = getMealsFromLS();
    mealIds = [...mealIds, mealId];
    console.log(mealIds,mealId);
    console.log(mealIds.__proto__);
    console.log(mealId.__proto__);

    localStorage.setItem("mealIds",JSON.stringify([...mealIds,mealId]));
}


async function getRandomMeal() {
  const randomMeal = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const randomMealResult = await randomMeal.json();
  const randomMealData = randomMealResult.meals[0];
  console.log(randomMealData);
  loadRandomMeal(randomMealData);
}

function loadRandomMeal(randomMealData) {
 let randomMealImage = document.createElement("div");
 randomMealImage.classList.add("meal-image");

  //randomMealImage.setAttribute("src", `${randomMealData.strMealThumb}`);
  //let randomMealName = document.querySelector(".meal-name");
  randomMealImage.innerHTML = `<div class="meal-header">
    <span class="random">Random recipe</span>
    <img src="${randomMealData.strMealThumb}" alt="${randomMealData.strMeal}">
    </div>
    <div class="meal-body">
    <h4 class="meal-name">${randomMealData.strMeal}</h4>
    <button class="fav-btn">
    <i class="fas
    fa-heart"></i></button></div>`;
    meals.appendChild(randomMealImage);


    const btn = randomMealImage.querySelector(".meal-body .fav-btn");
    btn.addEventListener("click",()=>{
        if(btn.classList.contains("active")){
            removeMealFromLS(randomMealData.idMeal);
            btn.classList.remove("active");
        }
        else{
            addMealToLS(randomMealData.idMeal);
            btn.classList.toggle("active");
        }
    });
}

async function getMealById(id) {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
    
}

async function getMealBySearch(term) {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
}






getRandomMeal();
