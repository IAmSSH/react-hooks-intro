import React from "react";

const Card = ({ title, ingredients, image }) => {
  return (
    <div className="dish">
      <h3>{title}</h3>
      <img src={image} alt="Dish" />
      <div>
        <h4>Ingredients</h4>
        <ol style={{ lineHeight: 1.5 + "em" }}>
          {ingredients.split(",").map((ele) => (
            <li>{ele}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Card;
