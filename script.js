const inputField = document.querySelector("#input");
const addRecipeButton = document.querySelector("#add-recipe")
const mainBlock = document.querySelector("main")
const recipes = []

addRecipeButton.addEventListener("click", (event) => {
    event.preventDefault();
    recipes.push(inputField.value)
})

for (let recipe of recipes) {
    const recipeBlock = document.createElement("div");
    const buttonsSection = document.createElement("div");
    const viewButton = document.createElement("button");
    viewButton.textContent = "View"
    buttonsSection.appendChild(viewButton);
    const editButton = document.createElement("button");
    editButton.textContent = "Edit"
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove"
}
// inputField.addEventListener("input", () => {
//     mainBlock.textContent = "";
//     for (let recipe in recipes) {
//         if (this.value in recipe)  {
//             recipe.
//         }
//     }
// })

