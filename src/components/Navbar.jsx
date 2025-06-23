import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <div className="text-xl font-bold">NOON</div>
      <ul className="flex gap-4 text-sm">
        <li>Shop All</li>
        <li>The Science</li>
        <li>Our Ethos</li>
        <li>Mind Rituals</li>
      </ul>
      <div>Account 🛒</div>
    </nav>
  );
};

export default Navbar;
