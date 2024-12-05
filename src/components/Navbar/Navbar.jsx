import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const links = (
    <div className="flex flex-col font-semibold gap-4 lg:flex-row">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allVisas">Visas</NavLink>
      </li>
      <li>
        <NavLink to="/addVisa">Add Visa</NavLink>
      </li>
      <li>
        <NavLink to="/applications">My Applications</NavLink>
      </li>
    </div>
  );
  return (
    <div className="sticky top-0 z-20 navbar bg-base-100 py-4 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            onClick={handleToggle}
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            {!isOpen ? (
              <RxCross1 />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            )}
          </div>
          {isOpen ? (
            " "
          ) : (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          )}
        </div>
        <Link to="/" className="mr-4 lg:mr-8">
          <h1>V.Navigator</h1>
        </Link>
        <ul className="menu  px-1 hidden lg:menu-horizontal">{links}</ul>
      </div>
      
      <div className="navbar-end flex items-center">

        
          <div>
            <button  className="btn font-semibold">
              Log out
            </button>
          </div>
      
          <Link to="/login" className="btn font-semibold">
            Log in
          </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
