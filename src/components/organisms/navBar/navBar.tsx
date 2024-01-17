import React, { useEffect } from "react";
import "./navBar.scss";
import Logo from "../../atoms/logo";
import { Link, useLocation } from "react-router-dom";

const pages = ["intro", "education", "experience", "projects", "contactme"];

const NavBar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("route is:", pathname);
  }, [pathname]);

  return (
    <div className={"nav-bar"}>
      <Logo />
      <div className={"nav-bar__list"}>
        {pages &&
          pages.map((page) => (
            <Link
              className={`nav-bar__item ${
                pathname.includes(page) ? "active" : ""
              }`}
              to={`/${page}`}
            >
              {page}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default NavBar;
