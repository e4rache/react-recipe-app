import React from "react";

const Ingredients = props => {
  const ingredientList = props.ingredients.map(ingredient => (
    <li key={props.ingredients.indexOf(ingredient)}>{ingredient}</li>
  ));
  return (
    <div>
      <p>Ingredients :</p>
      <ul>{ingredientList}</ul>
    </div>
  );
};

export default Ingredients;
