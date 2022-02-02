import React from "react";
import "../../styles/navStyles/nav.scss";

const Nav: React.FC = () => {
  const test: string = "Navbar";

  return (
    <div className="App">
      <h1>{test}</h1>
    </div>
  );
};

export default Nav;
