import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLight, light, dark } = this.context;
    const theme = isLight ? light : dark;
    return (
      <div style={{ background: theme.bg, color: theme.color }}>
        <h3>BookList</h3>
        <ul>
          <li>Book 1</li>
          <li>Book 2</li>
          <li>Book 3</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
