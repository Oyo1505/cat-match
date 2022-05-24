import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link to="/"> home </Link>
      <Link to="/cats"> Cats </Link>
    </div>
  );
};

export default Menu;
