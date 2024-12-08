import { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Logo from '../../assets/logo.png'

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
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
        <NavLink to="/allVisas">All Visas</NavLink>
      </li>
      <li>
        <NavLink to="/addVisa">Add Visa</NavLink>
      </li>
      <li>
        <NavLink to="/myAddedVisas">My Added Visas</NavLink>
      </li>
      <li>
        <NavLink to="/myVisaApplications">My Visa Applications</NavLink>
      </li>
    </div>
  );
  return (
    // sticky top-0 z-20 bg-base-100  shadow-lg for fixed layout
    <div className=" navbar py-4 bg-white">
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
          <img src={Logo} alt="Website logo" className="w-20 h-20" />
        </Link>
        <ul className="menu  px-1 hidden lg:menu-horizontal">{links}</ul>
      </div>

      <div className="navbar-end flex items-center">
        {user && user?.email ? (
          <div>
            <button onClick={signOutUser} className="btn font-semibold">
              Sign out
            </button>
          </div>
        ) : (
          <Link to="/signin" className="btn font-semibold">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
