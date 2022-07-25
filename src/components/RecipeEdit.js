import React, { useContext } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from "./App";
import AuthorEdit from "./AuthorEdit";

const { v4: uuidv4 } = require("uuid");

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;

    handleChange({ ingredients: newIngredients });
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    const newIngredients = [...recipe.ingredients, newIngredient];
    handleChange({ ingredients: newIngredients });
  }

  function handleIngredientDelete(id) {
    const newIngredients = [...recipe.ingredients].filter((i) => i.id !== id);

    handleChange({ ingredients: newIngredients });
  }

  function handleAuthorChange(id, author) {
    const newAuthors = [...recipe.authors];
    const index = newAuthors.findIndex((i) => i.id === id);
    newAuthors[index] = author;

    handleChange({ authors: newAuthors });
  }

  function handleAuthorAdd() {
    const newAuthor = {
      id: uuidv4(),
      name: "",
    };
    const newAuthors = [...recipe.authors, newAuthor];
    handleChange({ authors: newAuthors });
  }

  function handleAuthorDelete(id) {
    const newAuthors = [...recipe.authors].filter((i) => i.id !== id);

    handleChange({ authors: newAuthors });
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          onClick={() => handleRecipeSelect(undefined)}
          className="btn recipe-edit__remove-button"
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          onInput={(e) => handleChange({ name: e.target.value })}
        />

        <label htmlFor="cookTime" className="recipe-edit__label">
          Cook Time
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="cookTime"
          id="cookTime"
          value={recipe.cookTime}
          onInput={(e) => handleChange({ cookTime: e.target.value })}
        />

        <label htmlFor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          className="recipe-edit__input"
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={recipe.servings}
          onInput={(e) =>
            handleChange({ servings: parseInt(e.target.value) || "" })
          }
        />

        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          className="recipe-edit__input"
          onInput={(e) => handleChange({ instructions: e.target.value })}
          id="instructions"
          value={recipe.instructions}
        ></textarea>
      </div>

      <br />

      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid recipe-edit__add-item-grid-container">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
            ingredient={ingredient}
          />
        ))}
      </div>

      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary" onClick={handleIngredientAdd}>
          Add Ingredient
        </button>
      </div>

      <label className="recipe-edit__label">Authors</label>
      <div className="recipe-edit__author-container recipe-edit__add-item-grid-container">
        <div>Name</div>
        <div></div>
        {recipe.authors.map((author) => (
          <AuthorEdit
            key={author.id}
            handleAuthorChange={handleAuthorChange}
            handleAuthorDelete={handleAuthorDelete}
            author={author}
          />
        ))}
      </div>

      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary" onClick={handleAuthorAdd}>
          Add Author
        </button>
      </div>
    </div>
  );
}
