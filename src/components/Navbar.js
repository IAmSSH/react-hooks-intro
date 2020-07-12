/**
 *
 * Accessing state using .Cosnumer Pattern ThemeContext.Consumer:
 *
 * We simply use JS inside the Consumer component i.e. ThemeContext.Consumer like :
 *
 * <ThemeContext.Consumer>
 *  {}
 * </ThemeContext.Consumer>
 *
 * inside the brackets, we define a function that takes in an argument which is
 * the context. eg.
 *
 * (context) => {
 *  ...
 * }
 *
 * the `context` will have access to the contxet.
 *
 *
 */

import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const { toggleAuth, isLoggedIn } = useContext(AuthContext);
  const theme = isLight ? light : dark;

  return (
    <nav style={{ background: theme.bg, color: theme.color }}>
      <h1>BookList App</h1>
      <div onClick={toggleAuth}>{isLoggedIn ? "True" : "False"}</div>
      <ul className="navbar">
        <li className="navbar__items">Home</li>
        <li className="navbar__items">About Us</li>
        <li className="navbar__items">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

// class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => {
//           return (
//             <ThemeContext.Consumer>
//               {(context) => {
//                 const { isLight, light, dark } = context;
//                 const theme = isLight ? light : dark;
//                 return (
//                   <nav style={{ background: theme.bg, color: theme.color }}>
//                     <h1>BookList App</h1>
//                     <ul className="navbar">
//                       <li className="navbar__items">Home</li>
//                       <li className="navbar__items">About Us</li>
//                       <li className="navbar__items">Contact</li>
//                     </ul>
//                   </nav>
//                 );
//               }}
//             </ThemeContext.Consumer>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }

// export default Navbar;
