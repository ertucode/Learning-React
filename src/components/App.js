import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import RecipeEdit from "./RecipeEdit";

const { v4: uuidv4 } = require("uuid");

export const RecipeContext = React.createContext();

const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  useEffect(() => {
    const recipesJSON = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (recipesJSON != null) setRecipes(JSON.parse(recipesJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    };

    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1.45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      { id: "1", name: "Salt", amount: "1 Tbs" },
      { id: "2", name: "Chicken", amount: "2 pounds" },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0.45",
    instructions: "1. Put pepperica on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      { id: "1", name: "Pepperica", amount: "2 Tbs" },
      { id: "2", name: "Pork", amount: "2 pounds" },
    ],
  },
];

export default App;
