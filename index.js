var recipeEl = document.querySelector(".recipe-el");
var flourEl = document.querySelector('.flour');
var bakingSoda = document.querySelector('.baking-soda');
var bakingPowder = document.querySelector('.baking-powder');
var yogurt = document.querySelector('.yogurt');
var salt = document.querySelector('.salt');
var count = document.getElementById('bagel-amt');
var countEl = document.querySelector('.count-number')

var recipe = {
  flour: 60,
  yogurt: 82.5,
  bakingSoda: 0.125,
  bakingPowder: .75,
  salt: 0.125,
};

// var macros = {
//     calories: 202,
//     protein: 42,
//     netCarbs: 11.4,
//     fat: 2, 
// }
function changeRecipe(count) {
  // if (count) {
    var countNum = parseInt(count)
    var newRecipe = {
      flour: (recipe.flour * countNum),
      yogurt: (recipe.yogurt * countNum),
      bakingSoda: (recipe.bakingSoda * countNum),
      bakingPowder: (recipe.bakingPowder * countNum),
      salt: (recipe.salt * countNum),
    };
    return newRecipe;
  //   return `To make ${count} bagel(s), you will need:
  //    ${newRecipe.flour}g flour, ${newRecipe.yogurt}g yogurt, ${newRecipe.bakingPowder} tsp baking powder, ${newRecipe.bakingSoda} tsp baking soda, ${newRecipe.salt} tsp salt.`;
  // } else {
  //   return `Are you sure you don't want to make any bagels? That's sad.`
  // }
}
// function changeMacros(count) {
//     var newMacros = {
//         calories: (macros.calories * count),
//         protein: (macros.protein * count),
//         netCarbs: (macros.netCarbs * count),
//         fat: (macros.fat * count),
//       };
//       return `${newMacros.calories} calories, `
// }
// function increment() {
//   count += 1;
//   countEl.textContent = count;
// }

function newRecipe() {
  console.log(count.value)
  recipeEl.classList.remove('hidden')
  var newRecipe = changeRecipe(count.value);
  countEl.innerText = `${count.value}`
  flourEl.innerText = `${newRecipe.flour}`;
  yogurt.innerText = `${newRecipe.yogurt}`;
  bakingPowder.innerText = `${newRecipe.bakingPowder}`;
  bakingSoda.innerText = `${newRecipe.bakingSoda}`;
  salt.innerText = `${newRecipe.salt}`;
}


