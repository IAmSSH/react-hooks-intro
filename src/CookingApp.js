import React, { useState } from "react";
import Card from "./components/Cooking/Card";
import Search from "./components/Cooking/Search";

const CookingApp = () => {
  const [dishes, setDish] = useState([]);

  const addDish = (newDish) => {
    setDish(newDish);
  };

  return (
    <div className="container">
      <Search addDish={addDish} />
      <div className="dishes">
        {dishes.map((dish) => (
          <Card
            key={Math.random()}
            title={dish.title}
            ingredients={dish.ingredients}
            image={dish.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default CookingApp;
