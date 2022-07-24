import React from "react"
import RecipeList from "./RecipeList"
import "../css/app.css"

function App() {
  return (
    <>
      <RecipeList recipes={sampleRecipes}/>
    </>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1.45",
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {id: "1",
      name: "Salt",
      amount: "1 Tbs"},
      {id: "2",
      name: "Chicken",
      amount: "2 pounds"},
    ]
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0.45",
    instructions: "1. Put pepperica on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {id: "1",
      name: "Pepperica",
      amount: "2 Tbs"},
      {id: "2",
      name: "Pork",
      amount: "2 pounds"},
    ]
  },

]

export default App;
