let recipeEl = document.getElementById("recipe-el");
let countEl = document.getElementById("count-el");
let count = 0;
// let list = document.getElementById("myList");

let recipe = {
  flour: 60,
  yogurt: 82.5,
  bakingSoda: 0.125,
  bakingPowder: .75,
  salt: 0.125,
};

// let macros = {
//     calories: 202,
//     protein: 42,
//     netCarbs: 11.4,
//     fat: 2, 
// }
function changeRecipe(count) {
  if (count) {
    let newRecipe = {
      flour: (recipe.flour * count),
      yogurt: (recipe.yogurt * count),
      bakingSoda: (recipe.bakingSoda * count),
      bakingPowder: (recipe.bakingPowder * count),
      salt: (recipe.salt * count),
    };
    return `To make ${count} bagel(s), you will need:
     ${newRecipe.flour}g flour, ${newRecipe.yogurt}g yogurt, ${newRecipe.bakingPowder} tsp baking powder, ${newRecipe.bakingSoda} tsp baking soda, ${newRecipe.salt} tsp salt.`;
  } else {
    return `Are you sure you don't want to make any bagels? That's sad.`
  }
}
// function changeMacros(count) {
//     let newMacros = {
//         calories: (macros.calories * count),
//         protein: (macros.protein * count),
//         netCarbs: (macros.netCarbs * count),
//         fat: (macros.fat * count),
//       };
//       return `${newMacros.calories} calories, `
// }
function increment() {
  count += 1;
  countEl.textContent = count;
}

function newRecipe() {
  recipeEl.textContent = changeRecipe(count)
  countEl.textContent = 0;
  count = 0;
}



