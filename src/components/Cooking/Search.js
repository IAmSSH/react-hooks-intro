import React, { useState } from "react";

const Search = ({ addDish }) => {
  const [dish, setDish] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${dish}&p=3`
    )
      .then((res) => res.json())
      .then((data) => {
        addDish(data.results);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={dish}
        onChange={(e) => {
          setDish(e.target.value);
        }}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default Search;
