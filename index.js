var recipeEl = document.querySelector(".recipe-el");
var flourEl = document.querySelector('.flour');
var bakingSoda = document.querySelector('.baking-soda');
var bakingPowder = document.querySelector('.baking-powder');
var yogurt = document.querySelector('.yogurt');
var salt = document.querySelector('.salt');
var count = document.getElementById('bagel-amt');
var countEl = document.querySelector('.count-number');
const form = document.querySelector('form')

const recipe = {
  flour: 60,
  yogurt: 82.5,
  bakingSoda: 0.125,
  bakingPowder: .75,
  salt: 0.125,
};

let currentRecipe;

function changeRecipe(count) {
    const countNum = parseFloat(count)
    return {
      flour: (recipe.flour * countNum),
      yogurt: (recipe.yogurt * countNum),
      bakingSoda: (recipe.bakingSoda * countNum),
      bakingPowder: (recipe.bakingPowder * countNum),
      salt: (recipe.salt * countNum),
    };
}

function getNewRecipe() {
  recipeEl.classList.remove('hidden')
  currentRecipe = changeRecipe(count.value);
  countEl.innerText = `${count.value}`
  flourEl.innerText = `${currentRecipe.flour}`;
  yogurt.innerText = `${currentRecipe.yogurt}`;
  bakingPowder.innerText = `${convertTeaspoons(currentRecipe.bakingPowder)}`;
  bakingSoda.innerText = `${convertTeaspoons(currentRecipe.bakingSoda)}`;
  salt.innerText = `${convertTeaspoons(currentRecipe.salt)}`;
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('hello')
  getNewRecipe()
})

