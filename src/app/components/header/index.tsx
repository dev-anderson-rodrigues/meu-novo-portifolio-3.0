import React from "react";
import Component_Nav from "../component-nav";

const Header = () => {
  return (
    <header className="w-screen fixed top-0 h-16  items-center flex justify-center z-50">
      <div className="flex justify-between items-center p-6 w-full max-w-screen-xl">
        <h1 className=" text-lg">
          <p>Anderson Rodrigues</p>
          <p>Desenvolvedor Full Stack</p>
        </h1>
        <Component_Nav />
      </div>
    </header>
  );
};

export default Header;
