const re = /^([0-9\s//\-\.])*/g;

let ingredients = document.querySelectorAll('.ingredient-panel li');

ingredients.forEach(ingredient => {
  let amount = ingredient.textContent.match(re);
  let final = ingredient.innerHTML = ingredient.innerHTML.replace(amount, `<span>` + amount + `</span>` + ' ');
  return final;
});
