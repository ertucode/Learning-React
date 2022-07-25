import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./App";

export default function RecipeList({ recipes, searchQuery }) {
  const { handleRecipeAdd } = useContext(RecipeContext);

  function handleSearchQuery(name) {
    if (searchQuery === "") return true;

    return name.toUpperCase().match(searchQuery.toUpperCase());
  }

  return (
    <div className="recipe-list">
      <div>
        {recipes
          .filter((recipe) => handleSearchQuery(recipe.name))
          .map((recipe) => {
            return <Recipe key={recipe.id} {...recipe} />;
          })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
