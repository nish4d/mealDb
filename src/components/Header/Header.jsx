import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-2xl font-bold px-3">Shopping</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-4 gap-4">
            <li className="hover:text-amber-500 cursor-pointer">Home</li>
            <li className="hover:text-amber-500 cursor-pointer">Blog</li>
            <li className="hover:text-amber-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
